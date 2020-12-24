<template>
  <v-app id="inspire">
    <v-main class="grey lighten-2">
      <v-container>        
        <!-- -->
        <v-row>    
          <v-alert type="success">
          </v-alert>      
          <v-col>
            <autenticado-dashboard>              
            </autenticado-dashboard>
          </v-col>          
        </v-row>
      </v-container>
    </v-main>
  </v-app>

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