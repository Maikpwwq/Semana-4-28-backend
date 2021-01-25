<template>
        <!-- Componente CRUD de administración-->
        <autenticado-dashboard></autenticado-dashboard>
</template>

<script>
import AutenticadoDashboard from '../components/AutenticadoDashboard.vue';

export default {
  name: 'Dashboard',
  components: {
        AutenticadoDashboard
  },
  data: () => ({
      
  }),
}
</script>