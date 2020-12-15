<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <router-link to="/dashboard">Dashboard</router-link> 
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon">
          </span>
        </button>
      </div >
    </nav >
    <div class="container mt-5" id='app'>
        <h1>
            {{tittle}} <small class="text-muted"> sesion : {{sesion}} </small> 
        </h1>

        <mis-tareas></mis-tareas>

    </div>
    <!--  Aqui se muestra la vista de la ruta  -->      
    <router-view/>
  </div >
</template>

<script>
  export default {
  name: "App",
  components: {
  
  },
  data() {
    return {
      message: 'Hola Michael!',
      tittle: 'Gestor de Tareas',
      sesion: '5',
      tareas: [],
      nuevaTarea: '',
      ckecked : false,
    };
  },
  methods: {
      agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: this.checked,
            });
            console.log(this.nuevaTarea);
            this.nuevaTarea = '';
            this.checked= false;
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas))
        },
        editarTarea(index){
            console.log('editando....');
            if (this.tareas[index].estado){
                this.tareas[index].estado = false;
            } else {
                this.tareas[index].estado = true;
            }            
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas))
        },
        eliminarTarea(index){
            if (!this.tareas[index].estado){
                this.tareas.splice(index,1);
                localStorage.setItem('tareas-vue', JSON.stringify(this.tareas))
            }            
        }
  },
  mounted() {
    
  },
  computed: {},
  beforeCreate: {},
  created() {
        let datosDB = JSON.parcer(localStorage.getItem('tareas-vue'));
        if (datosDB === null) {
            this.tareas = []
        } else {
            this.tareas = datosDB;
        }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
