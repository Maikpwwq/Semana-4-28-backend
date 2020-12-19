<template>
  <div class="portafolio">
    <ThePortafolio msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ThePortafolio from '@/components/ThePortafolio.vue'

export default {
  name: 'Portafolio',
  components: {
    ThePortafolio
  }
}
</script>
