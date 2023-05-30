// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
// import es from 'vuetify/components or directives/locale/es';

export default createVuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#4f317e",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        anchor: "#8c9eff",
      },
    },
  },
  lang: {
    // locales: { es },
    current: "es",
  },
});
