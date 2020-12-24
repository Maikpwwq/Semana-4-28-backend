<template>
  <v-app id="inspire">

    <v-system-bar app dark>
      <v-spacer></v-spacer>
        <v-list>
          <v-list-title v-text="'Bienvenido!'"></v-list-title>
          
          <v-list-item
            :to="{name:'Portafolio'}"
            exact>            
            <v-list-item-icon>
              <v-icon v-text="'mdi-user'"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="'Nombre:'"></v-list-item-title>
              {{user.nombre}}
            </v-list-item-content>            

            <v-list-item-icon>
              <v-icon v-text="'mdi-email'"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="'Email:'"></v-list-item-title>
              {{user.email}}
            </v-list-item-content>            

          </v-list-item>
        </v-list>             

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>

      
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Aplicativo</v-toolbar-title>

      <v-spacer></v-spacer>      

      <v-btn
        icon
        color="error"
        class="mr-4"
        @click.prevent="logOut"
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
      <!-- Menu desplegable -->
      <v-card
        class="mx-auto"
        width="300"
      >
        <v-list 
          v-if="logueado" 
          nav>
          <!-- Pagina de Inicio -->
          <v-list-item
            :to="{name:'Portafolio'}"
            exact>            
            <v-list-item-icon>
              <v-icon v-text="'mdi-home'"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="'Portafolio'"></v-list-item-title>
            </v-list-item-content>            

          </v-list-item>

          <!-- Acceso a la administacion de componentes -->
          <v-list-group
            :value="true"
            prepend-icon="mdi-account-circle"
          >
            <template v-slot:activator>
              <v-list-item-title>Dashboard</v-list-item-title>
            </template>
            <!-- Administrador de Categorias y Articulos -->

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

            <!-- Administrador de Usuarios -->
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
import VueJwtDecode from 'vue-jwt-decode';

  export default {
    name: 'AutenticadoDashboard',
    components: {

    },
    data: () => ({
      drawer: null,
      items: [
        { title: 'Portafolio', icon: 'mdi-home', ruta: 'Portafolio'},
      ],
      adminItems: [
        /*
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline', ],
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete']
        */
        { title: 'Categorias', icon: 'mdi-table', ruta: 'Categoria'},
        { title: 'Articulos', icon: 'mdi-file', ruta: 'Articulos'},
      ],
      user: [{
          email: "",
          nombre: ""  
      }],
      permisosItems: [        
        { title: 'Ususario', icon: 'mdi-account', ruta: 'Usuarios'}
      ],
    }),    
    
    methods:{        
        // Metodo cerrarSesion
        logOut(){
            this.$store.dispatch('salir');          
            localStorage.removeItem('jwt');
            // localStorage.removeItem('user');
            this.$router.push('/')
        },
        getUserDetails(){
          let token = localStorage.getItem('jwt');
          let user = VueJwtDecode.decode(token);
          console.log(user);
          if(token){
            this.user= user
          }
        }
    }, 
    
    created(){
        //this.getUserDetails();
        this.$store.dispatch('autoLogin')
    }          
  }
</script>

<style lang="scss">

</style>