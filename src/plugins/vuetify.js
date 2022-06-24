// import Vue from 'vue';
// import { createApp } from 'vue'
// import Vuetify from 'vuetify/lib/framework';
import { createVuetify } from "vuetify";
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import Vuetify from 'vuetify';
import es from 'vuetify/lib/locale/es';
import '@mdi/font/css/materialdesignicons.css'
// const app = createApp({})
// app.use(Vuetify);

// Replaces new Vuetify(...)
const vuetify = createVuetify({
  // components,
  // directives,
  theme: {
    options: {
      customProperties: true,
    },
  themes: {
    light: {
      primary: '#4f317e',
      secondary: '#424242',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107',
      anchor: '#8c9eff',
    },
  },
},
  lang: {
    locales: { es },
    current: 'es',
  },
});

export default vuetify;
