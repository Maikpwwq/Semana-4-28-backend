//import Vue from 'vue';
// import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ThePortafolio from "../views/ThePortafolio.vue";
import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "ThePortafolio",
    component: ThePortafolio,
    meta: {
      public: true,
    },
  },
  {
    path: "/login",
    name: "LogIn",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LogIn.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUp.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/dashboard",
    name: "AutenticadoDashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/AutenticadoDashboard.vue"
      ),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "articulos",
        name: "TablaArticulos",
        component: () =>
          import(
            /* webpackChunkName: "articulos" */ "../views/TablaArticulos.vue"
          ),
        meta: {
          auth: true,
          Almacenero: true,
          //vendedor: true,
        },
      },
      {
        path: "categorias",
        name: "TablaCategorias",
        component: () =>
          import(
            /* webpackChunkName: "categorias" */ "../views/TablaCategorias.vue"
          ),
        meta: {
          auth: true,
          Almacenero: true,
        },
      },
      {
        path: "usuarios",
        name: "TablaUsuarios",
        component: () =>
          import(
            /* webpackChunkName: "usuarios" */ "../views/TablaUsuarios.vue"
          ),
        meta: {
          auth: true,
          Administrador: true,
        },
      },
    ],
  },
];

// const app = createApp({});
// base: process.env.BASE_URL,
const router = createRouter({
  history: createWebHistory(), // WebHashHistory()
  routes,
});

// app.use(router);

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.public)) {
    next();
  } else if (to.matched.some((record) => record.meta.auth)) {
    if (store.state.user) {
      /* if (store.state.user.rol === 'Administrador' || 'Vendedor' || 'Almacenero'){
          
        } else {
          return from.status(403).send({
            message: 'Usuario no autorizado'
          });
        }*/
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
