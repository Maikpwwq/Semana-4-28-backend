<template>
  <v-app id="inspire">

    <v-system-bar app dark>
      <v-spacer></v-spacer>

      <div>
            <p>Bienvenido!</p>
            <ul class="list-group">
                <li class="list-group-item">
                    <span>Nombre:</span> {{user.nombre}}
                </li>
                <li class="list-group-item">
                    <span>Email:</span> {{user.email}}
                </li>
            </ul>    
      </div>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>

      
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>      

      <v-btn
        icon
        color="error"
        class="mr-4"
        @click.prevent="logOut()"
      > 
        <v-icon> mdi-logout </v-icon> 
        <span> Cerrar Sesion </span> 
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->
      <v-card
        class="mx-auto"
        width="300"
      >
        <v-list>
          <v-list-item
            :to="{name:'Dashboard'}"
            exact>            
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>            

          </v-list-item>

          <v-list-group
            :value="true"
            prepend-icon="mdi-account-circle"
          >
            <template v-slot:activator>
              <v-list-item-title>Administrador</v-list-item-title>
            </template>

            <v-list-group
              :value="true"
              no-action
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Administrar</v-list-item-title>
                </v-list-item-content>
              </template>

              <!--   -->
              <v-list-item
                v-for="([title, icon, ruta], index) in adminItems"
                :key="index"
                :to="{name:ruta}"             
                link
              >
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group 
              v-if="this.$store.state.user.rol === 'Administrador'"
              no-action
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Permisos</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="([title, icon, ruta], index) in permisosItems"
                :key="index"
                :to="{name:ruta}"             
                link
              >
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <!-- 
          <v-row>
          <template v-for="n in 4">
            <v-col
              :key="n"
              class="mt-2"
              cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
              v-for="j in 6"
              :key="`${n}${j}`"
              cols="6"
              md="2"
            >
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
         -->
        <v-row>          
          <router-view/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<!--   -->

<script>
  export default {
    name: 'AutenticadoDashboard',
    data: () => ({
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-home', ruta: 'Home'},
      ],
      adminItems: [
        /*['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],*/
        { title: 'Categorias', icon: 'mdi-table', ruta: 'Categoria'},
        { title: 'Articulos', icon: 'mdi-file', ruta: 'Articulos'},
      ],
      user: [{
                
      }],
      permisosItems: [
        /*['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],*/
        { title: 'Ususario', icon: 'mdi-account', ruta: 'Usuarios'}
      ],
    }),
    created(){
        this.$store.dispatch('autoLogin')
    },  
    methods:{        
        // Metodo cerrarSesion
        logOut(){
            this.$store.dispatch('salir');          
        },      
    },    
  }
</script>

<style lang="scss">

</style>