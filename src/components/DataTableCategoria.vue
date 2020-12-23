<template>
    <v-data-table
    :headers="headers"
    :items="categorias"
    sort-by="nombre"
    class="elevation-1"
    :loading= "cargando"
    loading-text='Cargando por favor espere'
    >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Categorías</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Agregar Nueva Categoria
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-textarea
                      v-model="editedItem.nombre"
                      label="Categoria"
                      counter="64"
                      no-resize
                    ></v-textarea>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-textarea
                      v-model="editedItem.descripcion"
                      label="Descripcion"
                      counter="254"
                      no-resize
                      auto-grow
                    ></v-textarea>
                  </v-col>                
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        medium
        @click="deleteItem(item)"
      >
        <template v-if="item.estado">
          mdi-toggle-switch          
        </template>        
        <template e-else>
          mdi-toggle-switch-off-outline
        </template>
        
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
    <pre>
      {{ $data.categorias }}
    </pre>
  </v-data-table>
</template>

<script>
//import axios from 'axios';

  export default {
    name: 'DataTableCategoria',
    data: () => ({
      dialog: false,
      dialogDelete: false,
      cargando: true,
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          sortable: true,
          value: 'nombre',
        },
        {
          text: 'Descripción', value: 'descripcion',
        },
        { 
          text: 'Estado', value: 'estado', 
        },        
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      categorias: [],
      editedIndex: -1,
      editedItem: {
        nombre: '',
        descripcion: '',
      },
      defaultItem: {
        nombre: '',
        descripcion: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva Categoría' : 'Editar Categoría'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize();
      this.list();
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            nombre: 'Frozen Yogurt',
            descripcion: 159,
            estado: 1,
          },
        ]
      },

      list(){
        this.axios.get('/api/categoria/list')
          .then( response  => {
            this.categorias = response.data;
            this.cargando = false
          })
          .catch( error => {
            console.log(error);
            return error
          })
      },

      editItem (item) {        
        //this.editedIndex = this.categorias.indexOf(item)
        this.editedIndex = item.id
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {        
        /// this.editedIndex = this.categorias.indexOf(item)
        // this.editedIndex = this.categorias[indexOf(item)].id
        this.editedIndex = item.id
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        // this.categorias.splice(this.editedIndex, 1) PARA LISTAS
        if (this.editedItem.estado === 1 ){
          // Desactivar una categoria
          this.axios.put('/api/categoria/deactivate', {
            id: this.editedItem.id,           
          })
          .then(response => {            
            this.list();
          })
          .catch(error => {
            console.log(error);
            return error
          })
          // Object.assign(this.categorias[this.editedIndex], this.editedItem)
        } else {
          // Activar una categoria
          this.axios.put('/api/categoria/activate', {
            id: this.editedItem.id,
          })
          .then(response => {            
            this.list();
          })
          .catch(error => {
            console.log(error);
            return error
          })
          //this.categorias.push(this.editedItem)
        }
        this.closeDelete()
      },

      close () {
        
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      
      save () {
        if (this.editedIndex > -1) {
          // Editar una categoria
          this.axios.put('/api/categoria/update', {
            id: this.editedItem.id, 
            nombre: this.editedItem.nombre, 
            descripcion: this.editedItem.descripcion,
          })
          .then(response => {            
            this.list();
          })
          .catch(error => {
            console.log(error);
            return error
          })
          // Object.assign(this.categorias[this.editedIndex], this.editedItem)
        } else {
          // Agregar un objeto
          this.axios.post('/api/categoria/add', {
            estado: 1, 
            nombre: this.editedItem.nombre, 
            descripcion: this.editedItem.descripcion,
          })
          .then(response => {            
            this.list();
          })
          .catch(error => {
            console.log(error);
            return error
          })
          //this.categorias.push(this.editedItem)
        }
        this.close()
      },

    },
  }
</script>