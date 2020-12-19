<template>
  <div class="componente mt-5">
        <the-login>
            <template v-slot:titulo>
              <h2>Formulario Login</h2>
            </template>
            <template v-slot:subtitulo>
              <h2>Por favor haga su registro</h2>
            </template>
      </the-login>
  </div>
</template>


<script>
// email prueba@gmail.com password micontraseña
import TheLogin from '@/components/auth/TheLogin.vue'

export default {
    name: 'Login',
    components: {
        TheLogin
    }    
}
</script>