// import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from "vue";
import history from "connect-history-api-fallback";
import App from "./App.vue";
// import vuetify from './plugins/vuetify'; // old way
import vuetify from "@/plugins/vuetify";
import router from "./router/index";
import Plugin from "@/plugins/axios";
import store from "./store/index";

/*
const base = axios.create({
  baseURL: 'https://backend-tratamiento-aguas.herokuapp.com'
  // baseURL: 'localhost:3000'
});
// await this.$http.post()
Vue.prototype.$http = base;
*/

const app = createApp(App);
app.use(vuetify);
app.use(Plugin);
app.use(history());
app.use(store);
app.use(router);
app.mount("#app");
