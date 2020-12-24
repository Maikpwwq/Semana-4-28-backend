<template>
  <div class="home">
    <header-nav />
   <div class="container pt-5 mt-5">
    <sec-banner></sec-banner>
    <sec-descripcion></sec-descripcion>
    <sec-servicios></sec-servicios>
    <sec-casos-exito></sec-casos-exito>
    <sec-footer></sec-footer>
   </div>
  </div>
  
</template>

<script>
import HeaderNav from '../components/HeaderNav'
import SecBanner from '../components/SecBanner'
import SecServicios from '../components/SecServicios'
import SecDescripcion from '../components/SecDescripcion'
import SecCasosExito from '../components/SecCasosExito'
import SecFooter from '../components/SecFooter'

export default {
  name: 'Home',
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