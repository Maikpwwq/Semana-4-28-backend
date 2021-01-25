<template>
  <v-app id="inspire">

    <v-system-bar app dark>
          <v-btn 
            value="recent"
            :to="{name:'Portafolio'}"
            exact
            >
            <span>Bienvenido!</span>
          </v-btn>
      <v-spacer></v-spacer>
          

          <v-btn value="favorites">
            <v-icon v-text="'mdi-account-circle'"></v-icon>
            <span>Nombre: {{$user.nombre}}</span>                        
          </v-btn>

          <v-btn value="nearby">
            <v-icon v-text="'mdi-email'"></v-icon>
            <span>Email: {{$user.email}}</span>              
          </v-btn>

    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">

      </v-app-bar-nav-icon>

      <v-toolbar-title>Aplicativo de administración CRUD</v-toolbar-title>

      <v-spacer></v-spacer>      

      <v-btn
        icon
        color="error"
        class="mr-12"
        @click.prevent="logOut"
      > 
        <v-icon> mdi-logout </v-icon> 
        <span> Cerrar Sesión </span> 
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!-- Menu desplegable -->
      <v-card
        class="mx-auto"
        width="300"
      >
        <v-list                     
          nav>
          <!-- Pagina de Inicio  v-if="auth"-->
          <v-list-item
            v-for="([title, icon, ruta], index) in homeItems"
            :key="index"
            :to="{name:ruta}"             
            exact>            
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="title"></v-list-item-title>
            </v-list-item-content>            

          </v-list-item>

          <!-- Acceso a la administacion de componentes -->
          <v-list-group
            :value="true"
            prepend-icon="mdi-account-circle"
          >
          <!-- Administrador de Categorias y Articulos -->            
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    Administrar
                  </v-list-item-title>
                </v-list-item-content>
              </template>

              <!--   -->
              <v-list-item
                v-for="([title, icon, ruta], index) in adminItems"
                :key="index"
                :to="{name:ruta}"             
                link
              >
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="title">                  
                </v-list-item-title>
          
              </v-list-item>
          </v-list-group>

            <!-- Administrador de Usuarios -->
          <v-list-group 
              v-if="this.$store.state.user.rol === 'Administrador'"
              prepend-icon="mdi-account-circle"              
              :value="true"              
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    Permisos
                  </v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="([title, icon, ruta], index) in permisosItems"
                :key="index"
                :to="{name:ruta}"             
                link
              >                
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="title">                  
                </v-list-item-title>
              </v-list-item>
            </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>        
          <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<!--   -->

<script>
import VueJwtDecode from 'vue-jwt-decode';

  export default {
    name: 'AutenticadoDashboard',
    components: {

    },
    data: () => ({
      drawer: null,      
      user: [{
          email: "",
          nombre: ""  
      }],
      auth: false,
      homeItems: [
        ['Portafolio', 'mdi-home', 'Portafolio'], 
      ],
      /*
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline', ],
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete']
      */
      adminItems: [
        /* title: icon: ruta: */        
        [ 'Categorias', 'mdi-table', 'Categorias'],
        [ 'Articulos', 'mdi-file', 'Articulos'],
      ],
      permisosItems: [        
        [ 'Usuarios', 'mdi-account', 'Usuarios']
      ],
    }),    
    created(){        
        this.$store.dispatch('autoLogin');
        this.getUserDetails();
    }, 
    methods:{        
        // Metodo cerrarSesion
        logOut(){
            this.$store.dispatch('salir');          
            this.$router.push('/')
        },
        getUserDetails(){
          let token = localStorage.getItem('token');
          this.auth = localStorage.getItem('auth');
          let user = VueJwtDecode.decode(token);
          if(token){
            this.user= user
          }
        }
    },                
  }
</script>

<style lang="scss">

</style>