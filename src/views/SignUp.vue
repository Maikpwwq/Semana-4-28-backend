<template>
  <v-container fluid>
    <v-row>
      <v-col>
          <the-menu></the-menu>
            <the-registro>
                  <template v-slot:titulo>
                    <h3>Formulario de Registro</h3>
                  </template>
                  <template v-slot:subtitulo>
                    <h5>Por favor haga su registro</h5>
                  </template>
            </the-registro>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
// email prueba@gmail.com password micontraseña
import TheRegistro from '@/components/auth/TheRegistro.vue';
import TheMenu from '../components/TheMenu.vue';

export default {
    name: 'SignUp',
    components: {
        TheRegistro,
        TheMenu
    }    
}
</script>