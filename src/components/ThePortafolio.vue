<template>
  <v-container class="d-flex justify-content-between align-content-end" width="100%">
    <v-row class="text-center">
      <header-nav></header-nav>
      <v-col class="mb-8">        
        <div class="container pt-5 mt-5">
          <sec-banner></sec-banner>
          <sec-descripcion></sec-descripcion>
          <sec-servicios></sec-servicios>
          <sec-casos-exito></sec-casos-exito>               
        </div>
      </v-col>
      <sec-formulario></sec-formulario>     
      <sec-footer></sec-footer>
    </v-row>
  </v-container>
</template>

<script>
import HeaderNav from './home/HeaderNav'
import SecBanner from './home/SecBanner'
import SecServicios from './home/SecServicios'
import SecDescripcion from './home/SecDescripcion'
import SecCasosExito from './home/SecCasosExito'
import SecFormulario from './home/SecFormulario'
import SecFooter from './home/SecFooter'

export default {
  name: 'TheProtafolio',
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
  methods:{
      
  },
  components: {
    HeaderNav,
    SecBanner,
    SecServicios,
    SecDescripcion,
    SecCasosExito,
    SecFormulario,
    SecFooter,
  }
}
</script>