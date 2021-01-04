import Vue from 'vue'
import Vuex from 'vuex'
import jwtdecode from 'jwt-decode'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        user: null,
        auth:null,
    },
    mutations: {
        setToken(state,token){
            state.token = token; 
        }, 
        setUsuario(state,usuario){
            state.user = usuario; 
        },
        setAuth(state,auth){
            state.auth = auth; 
        }  
    },
    actions: {
        guardarToken({commit}, token){
            commit("setToken", token);
            commit("setUsuario", jwtdecode(token));
            localStorage.setItem('token', token);
        },
        guardarAuth({commit}, auth){
            commit("setAuth", auth);
            localStorage.setItem('auth', auth);
        },
        autoLogin({commit}){
            const token = localStorage.getItem('token', token);
            const auth = localStorage.getItem('auth', auth);
            if(token){
                commit("setToken", token);
                commit("setUsuario", jwtdecode(token));
                commit("setAuth", auth);
            } else {
                return false;
            }
        },
        salir({commit}){
            commit("setToken", null);
            commit("setUsuario", null);
            commit("setAuth", false);
            localStorage.removeItem('token');
            localStorage.removeItem('auth');
            router.push({name: 'Portafolio'})
        }
    }
});