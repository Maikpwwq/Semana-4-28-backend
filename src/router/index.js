import Vue from 'vue';
import VueRouter from 'vue-router';
import Portafolio from '../views/Portafolio.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Portafolio',
    component: Portafolio,
    meta: {
      Administrador: true,
      Vendedor: true,
      Almacenero: true,
      public: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component:() => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashBoard.vue'),
    meta: {
      auth: true,
    },
    children: [
      {
        path: 'articulos',
        name: 'Articulos',
        component: () => import(/* webpackChunkName: "articulos" */ '../views/Articulos.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'categorias',
        name: 'Categorias',
        component: () => import(/* webpackChunkName: "categoria" */ '../views/Categorias.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'usuarios',
        name: 'Usuarios',    
        component: () => import(/* webpackChunkName: "usuarios" */ '../views/Usuarios.vue'),
        meta: {
          auth: true,
          administrador: true,
        },
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) =>{
    if (to.matched.some(record => record.meta.public)){
      next();
    } else if (to.matched.some(record => record.meta.private)) {
      if(store.state.user){ 
        // if && store.state.user.rol === 'Administrador' o 'Vendedor'
        next()  
      } else {
        next({ name: 'Login' })
      }
    } else {
      next()
    }
});

export default router;