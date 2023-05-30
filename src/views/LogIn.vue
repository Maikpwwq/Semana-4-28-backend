<script>
// email prueba@gmail.com password micontraseña
import TheLogin from '../components/auth/TheLogin.vue';
import TheMenu from '../components/TheMenu.vue';

export default {
  name: 'LogIn',
  components: {
    TheLogin,
    TheMenu
  }
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <the-menu></the-menu>
        <the-login>
          <template v-slot:titulo>
            <h3>Formulario de Login</h3>
          </template>
          <template v-slot:subtitulo>
            <h5>Por favor ingrese su email y contraseña</h5>
          </template>
        </the-login>
      </v-col>
    </v-row>
  </v-container>
</template>