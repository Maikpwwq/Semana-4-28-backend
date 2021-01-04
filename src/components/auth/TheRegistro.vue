<template>
      <v-layout>
        <v-flex class='mb-3'>
          <v-row 
            align="center" 
            align-content="center" 
            style="heigt:70vh"
            justify="center"
          >
              <v-card 
                class="pa-5 col-md-8"
                height="600"
                width="250"
              >
                <v-form 
                  ref="form" 
                  lazy-validation 
                  v-model="valid"
                  justify="center"
                  class="text-center border border-primary p-5"
                  style="margin-top:70px;height:auto;padding-top:100px !important;"
                  @submit.prevent="loginUser" >   


                  <v-card-title>
                    <slot name="titulo"></slot> 
                  </v-card-title>
                  <v-card-text>
                    <slot name="subtitulo"></slot> 
                  </v-card-text>                  

                    <v-text-field
                    v-model="body.nombre"
                    label="Nombre"
                    outlined
                    required
                  ></v-text-field>                

                  <v-text-field
                    v-model="body.email"
                    label="E-mail"
                    :rules="emailRules"
                    outlined
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="body.password"
                    counter
                    label="Password"
                    :rules="passwordRules"
                    outlined
                    required
                  ></v-text-field>               
                                    
                  <v-btn  
                    :disabled="!valid"                  
                    color="success"
                    class="mr-4 w-75"
                    @click="registrarUser"
                  >
                    Siguiente
                  </v-btn>                                  

                </v-form>
                <!-- 
                  <pre>
                  {{body}}
                  </pre> 
                -->
              </v-card>                
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
    valid: true,
    passwordRules: [
      v => !!v || 'El campo Password es requerido',
      v => (v && v.length >= 10 ) || 'Password debe contener almenos 8 caracteres',
    ],    
    emailRules: [
      v => !!v || 'El campo E-mail es requerido',
      v => /.+@.+\..+/.test(v) || 'el E-mail debe ser valido',
    ],
    data(){
        return{
            body: {
                nombre: "",
                email: "",
                password: ""
            }
        }
    },
    beforeCreate(){
      this.$store.dispatch('autoLogin')       
    },
    methods:{
        // Maneja el evento de hacer click en el boton siguiente
        registrarUser(){
            console.log(`nuestra Respuesta  ${this.body}`);
            this.$refs.form.validate();
            axios
              .post('/api/usuario/signup', this.body)
              .then( response =>{
                return response.data
            })
            .then( data =>{
                this.$store.dispatch('guardarToken', data.tokenReturn);                
                this.$router.push({name:'Dashboard'});
                swal("Login exitoso!", "Se ha registrado el usuario en forma correcta, bienvenido!", "success");                
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