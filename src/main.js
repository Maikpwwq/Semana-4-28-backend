import { createApp } from 'vue'
import "core-js/actual";
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from'./plugins/axios'

loadFonts()

createApp(App)
  .use(router)
  .use(axios)
  .use(store)
  .use(vuetify)
  .mount('#root')
