<template>
      <v-layout>
        <v-flex class='mb-3'>
          <the-menu></the-menu>
          <v-row align="center" align-content="center" style="heigt:70vh">
            <v-col>
              <v-card class="pa-5 col-md-8">
                <v-form 
                  ref="form" 
                  lazy-validation 
                  class="text-center border border-primary p-5"
                  style="margin-top:70px;height:auto;padding-top:100px !important;"
                  @submit.prevent="loginUser" >   


                  <v-card-title>Iniciar de sesión</v-card-title>
                  <v-card-text></v-card-text>                  

                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="login.password"
                    :counter="10"
                    label="Password"
                    required
                  ></v-text-field>               

                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4 w-75"
                    @click="validate"
                  >
                    Iniciar Sesión
                  </v-btn>                                  

                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
        <pre>
              {{login}}
        </pre>        
      </v-layout>        
</template>

<script>
import TheMenu from '../TheMenu'
import axios from 'axios';
import swal from 'sweetalert';

export default {
    name: 'TheLogin',
    components: {
        TheMenu,
    },
    data(){
        return{
            login: {
                email: "",
                password: ""
            }
        }
    },
    beforeCreate(){
      this.$store.dispacth('autoLogin') 
      // ? this.$router.push({path: '/dashboard'}) : false;
    },
    methods:{
        // Maneja el evento de hacer click en el boton inicio
        async loginUser(){
            axios.post('http://localhost:3000/api/usuario/login', this.login)
            .then( response =>{
                return response.data
            })
            .then( data =>{
                this.$store.dispatch('guardarToken', data.tokenReturn);                
                this.$router.push({name:'Dashboard'});
                swal("Login exitoso!", "Los datos son correctos, bienvenido!", "success");
                console.log(data)
            })
            .catch( error =>{
                  swal("Oops!", "Algo salió mal!", "error"); // warning
                  console.log(error)
                  return error
            })              
        }
    }
}
</script>