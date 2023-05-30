"use strict";

// import Vue from 'vue';
// import { createApp } from 'vue'
import axios from "axios";
// const app = createApp({})

// Full config:  https://github.com/axios/axios#request-config
// Agregamos la URL base de nuestra API
axios.defaults.baseURL = "https://semana-4-28-backend.vercel.app"; //process.env.baseURL || process.env.apiUrl ||
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: "https://semana-4-28-backend.vercel.app",
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// Deprecated
// Plugin.install = function(Vue, options) {
//   Vue.axios = _axios;
//   window.axios = _axios;
//   console.log(options);
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get() {
//         return _axios;
//       }
//     },
//     $axios: {
//       get() {
//         return _axios;
//       }
//     },
//   });
// };
// export default Plugin;
// app.use(Plugin);

export default {
  install: function (Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
    // Vue.config.globalProperties.$axios = _axios;
    // Object.defineProperties(Vue.prototype, {
    //   axios: {
    //     get() {
    //       return _axios;
    //     },
    //   },
    //   $axios: {
    //     get() {
    //       return _axios;
    //     },
    //   },
    // });
  },
};
