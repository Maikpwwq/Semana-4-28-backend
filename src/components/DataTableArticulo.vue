<template>
 <div id="dataTableArticulo">
    <v-app>
      <v-data-table
      :headers="headers"
      :items="articulos"
      sort-by="id"
      class="elevation-1"
      :loading= "cargando"
      loading-text='Cargando por favor espere'
      >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Artículos</v-toolbar-title>
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
                Agregar Nuevo Artículo
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
                        v-model="editedItem.id"
                        label="ID"
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
                        v-model="editedItem.nombre"
                        label="Articulo"
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
                        label="Descripción"
                        counter="64"
                        no-resize
                      ></v-textarea>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-select
                        v-model="categoria"
                        label="Categoría"
                        :items="categorias"
                        item-text="nombre"
                        item-value="id"
                        return-object
                      ></v-select>
                    </v-col>  

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-textarea
                        v-model="editedItem.codigo"
                        label="Código"
                        counter="64"
                        no-resize
                        autofocus
                      ></v-textarea>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-text-field
                        v-model="editedItem.estado"
                        label="Estado"
                      ></v-text-field>
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
              <v-card-title class="headline">Deseas eliminar este Artículo?</v-card-title>
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
      <template v-slot:[`item.actions`]="{ item }">
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
        {{ $data.usuarios }}
      </pre>
    </v-data-table>
   </v-app>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'DataTableArticulo',
    data: () => ({
      dialog: false,
      dialogDelete: false,
      cargando: true,
      headers: [
        { text: 'ID', value: 'id'},
        {
          text: 'Nombre',
          align: 'start',
          sortable: true,
          value: 'nombre',
        },
        { text: 'Descripción', value: 'descripcion'},
        { text: 'Categoría', value: 'categoria.nombre'},
        { text: 'Código', value: 'codigo'},        
        { text: 'Estado', value: 'estado'},        
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      articulos: [],
      categorias: [],
      categoria: {
        id : 0,
        nombre : '' 
      },
      editedIndex: -1,
      editedItem: {
        id: 0,
        codigo: '',
        nombre: '',
        descripcion: '',
        precio_venta: 0,
        stock: 0,
        estado: 0,
        categoria: {
           id : 0,
           nombre : '' 
        },
      },
      defaultItem: {
        id: 0,
        codigo: '',
        nombre: '',
        descripcion: '',
        precio_venta: 0,
        stock: 0,
        estado: 0,
        categoria: {
           id : 0,
           nombre : '' 
        },
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Artículo' : 'Editar Artículo'
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
      this.listCategorias();
    },

    methods: {
      initialize () {
        this.articulos = [
          {
            nombre: 'Name',
            descripcion: 'Description',
            codigo: '',
            precio_venta: 0,
            stock: 0,
            estado: 0,
            categoria: {
              id : 0,
              nombre : 'Category' 
            },
          },
        ]
      },

      // Se necesitará Token, trae los datos de la BD para guardar el resultado en la variable variable articulos: [],
      list(){
        axios
          .get('/api/articulo/list'), {
            headers: {
              token: this.$store.state.token,
            },
          }
          .then( response  => {
            this.articulos = response.data;
            this.cargando = false
          })
          .catch( error => {
            console.log(error);
            return error
          })
      },

      listCategorias() {
      // Se necesitará Token, trae los datos de la BD para guardar el resultado en la variable variable categorias: [],
        axios
          .get("/api/categoria/list", {
            headers: {
              token: this.$store.state.token,
            },
          })
          .then((response) => {
            this.categorias = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },   

      editItem (item) {        
        this.editedIndex = item.id
        this.categoria = item? item.categoria : '', 
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {        
        this.editedIndex = item.id
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        if (this.editedItem.estado === 1 ){
          // Desactivar un Articulo
          axios
            .put('/api/articulo/deactivate', {
              id: this.editedItem.id,           
          })
          .then(response => {                        
            this.list();
            console.log(response);
          })
          .catch(error => {
            console.log(error);
            return error
          })          
        } else {
          // Activar una categoria
          axios
            .put('/api/articulo/activate', {
              id: this.editedItem.id,
              estado: 1,
          })
          .then(response => {            
            this.list();
            console.log(response);
          })
          .catch(error => {
            console.log(error);
            return error
          })
        }
        this.closeDelete()
      },

      close () {        
        this.dialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
          this.categoria = ''
        })        
      },

      closeDelete () {
        this.dialogDelete = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1
        })
      },
      
      save () {
        if (this.editedIndex > -1) {
          // Editar un articulo
          axios.put('/api/articulo/update', {
            id: this.editedItem.id, 
            nombre: this.editedItem.nombre, 
            codigo: this.editedItem.codigo,
            descripcion: this.editedItem.descripcion,
            precio_venta: this.editedItem.precio_venta,
            stock: this.editedItem.stock,
            categoriaId: this.categoria.id,
          }, 
          {
            headers: {
              token: this.$store.state.token,
            }
          })
          .then(response => {            
            this.list();
            console.log(response);
          })
          .catch(error => {
            console.log(error);
            return error
          })
        } else {
          // Agregar un articulo
          axios.post('/api/articulo/add', {
            estado: 1, 
            nombre: this.editedItem.nombre, 
            codigo: this.editedItem.codigo,
            descripcion: this.editedItem.descripcion,            
            precio_venta: this.editedItem.precio_venta,
            stock: this.editedItem.stock,
            categoriaId: this.categoria.id,
          }, 
          {
            headers: {
              token: this.$store.state.token,
            }
          })
          .then(response => {            
            this.list();
            console.log(response);
          })
          .catch(error => {
            console.log(error);
            return error
          })
        }
        this.close()
      },

    },
  }
</script>