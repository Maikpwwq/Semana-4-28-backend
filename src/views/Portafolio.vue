<template>
  <v-app class="portafolio">
    <v-main class="grey lighten-2">
      <v-container>        
        <ThePortafolio msg="Bienvenido Equipo 28"/>
      </v-container>
    </v-main>
  </v-app>    
</template>

<script>
// @ is an alias to /src
import ThePortafolio from '@/components/ThePortafolio.vue';

export default {
  name: 'Portafolio',
  components: {
    ThePortafolio
  }
}
</script>
