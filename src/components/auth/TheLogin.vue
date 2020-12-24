<template>
      <v-layout>
        <v-flex class='mb-3'>
          <v-row 
            align="center" 
            align-content="center" 
            style="heigt:70vh">
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
                    v-model="login.email"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="login.password"
                    :counter="10"
                    label="Password"
                    required
                  ></v-text-field>               
                  
                  <!-- :disabled="!valid" -->
                  <v-btn                    
                    color="success"
                    class="mr-4 w-75"
                    @click="loginUser"
                  >
                    Iniciar Sesión
                  </v-btn>                                  

                </v-form>
              </v-card>
              <pre>
                {{login}}
              </pre>  
            </v-col>            
          </v-row>
        </v-flex>              
      </v-layout>        
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
    name: 'TheLogin',
    components: {

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
      this.$store.dispatch('autoLogin')       
    },
    methods:{
        // Maneja el evento de hacer click en el boton inicio
        async loginUser(){
            console.log(`nuestra Respuesta  ${this.email}`)
            axios
              .post('/api/usuario/login', this.login)
              .then( response =>{
                return response.data
            })
            .then( data =>{
                this.$store.dispatch('guardarToken', data.tokenReturn);                
                this.$router.push({name:'Dashboard'});
                swal("Login exitoso!", "Se ha accedido en forma correcta, bienvenido!", "success");
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