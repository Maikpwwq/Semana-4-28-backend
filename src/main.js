import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import './plugins/axios'
import store from './store'

/*
const base = axios.create({
  baseURL: 'https://backend-tratamiento-aguas.herokuapp.com'
  // baseURL: 'localhost:3000'
});

Vue.prototype.$http = base;
*/

Vue.config.productionTip = false

new Vue({  
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
