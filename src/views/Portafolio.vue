<template>
  <div class="portafolio">
    <the-menu></the-menu>
    <ThePortafolio msg="Bienvenido Equipo 28"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ThePortafolio from '@/components/ThePortafolio.vue';
import TheMenu from '../components/TheMenu.vue';

export default {
  name: 'Portafolio',
  components: {
    ThePortafolio,
    TheMenu
  }
}
</script>
