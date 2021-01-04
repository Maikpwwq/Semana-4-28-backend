<template>
  <v-container>
    <v-row class="text-center">
      <header-nav></header-nav>
      <v-col class="mb-4">        
        <div class="container pt-5 mt-5">
          <sec-banner></sec-banner>
          <sec-descripcion></sec-descripcion>
          <sec-servicios></sec-servicios>
          <sec-casos-exito></sec-casos-exito>
          <sec-footer></sec-footer>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderNav from './home/HeaderNav'
import SecBanner from './home/SecBanner'
import SecServicios from './home/SecServicios'
import SecDescripcion from './home/SecDescripcion'
import SecCasosExito from './home/SecCasosExito'
import SecFooter from './home/SecFooter'
export default {
  name: 'TheProtafolio',
  data: () => ({
    
  }),
  methods:{
      
  },
  components: {
    HeaderNav,
    SecBanner,
    SecServicios,
    SecDescripcion,
    SecCasosExito,
    SecFooter,
  }
}
</script>