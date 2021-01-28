<template>
    <div id="services" class="container SecServicios">
        <div>
            <h2 class="text-center font-weight-normal pl-5 mlr-5">Servicios</h2>
          </div>
    
          <div class="row justify-content-center">
            <div class="mt-5 pt-5 col-sm-6 ">
              <div class="card bg-light border border-primary shadow" v-for="(categoria) in categorias" :key="categoria.id">
                <img src="../../../public/img/cenefaMarketing.jpg" class="card-img-top" alt="background servicios">
                <div class="card-body" >
                  <h5 class="card-title text-dark">{{categoria.nombre}}</h5>
                  <p class="card-text text-dark">{{categoria.descripcion}}
                  </p>
                        <!-- Button trigger modal -->
                    <button type="button" class="btn btn-info text-white float-right" data-toggle="modal" data-target="#staticBackdrop">
                    VER PORTAFOLIO
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" >
                        <div class="modal-content" >
                        <div class="modal-header bg-dark">
                            <h5 class="modal-title text-white" id="staticBackdrop1">Portafolio de productos</h5>
                            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="mdl-bdy" v-for="(subcategoria) in categorias" :key="subcategoria.id">
                            <h5 class="text-info">{{subcategoria.nombre}}</h5>
                            <p>
                            <ul class="list-group list-group-flush p-0" v-for="(articulo) in articulos" :key="articulo.id">
                                <li class="list-group-item"    v-if="articulo.categoria.nombre==subcategoria.nombre">{{articulo.nombre}}</li>
                                <!-- <li class="list-group-item">SEO y Posicionamiento Web</li>
                                <li class="list-group-item">Posicionamiento en redes</li>
                                <li class="list-group-item">Fotografía y Video</li>
                                <li class="list-group-item">Email Marketing</li>
                                <li class="list-group-item">Merchandising</li> -->
                            </ul>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-info text-white" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>

          </div>
    </div>
</template>
<script>
import axios from'axios';
export default {
    name: 'SecServicos',
    data: () => ({
      categorias: [],
      articulos:[]
    }),
    created () {
      this.list();
      this.listArt();
    },
    methods: {
      list(){
        //se traen los datos de la BD
        //Se necesitará Token
        //ya esta instalado Axios
        //se hace peticion para guardar el resultado en la variable variable categorias: [],
         axios.get('/api/categoria/list', {
         })
         .then(response => {
           this.categorias = response.data;
           this.cargando = false;
         })
         .catch(error =>{
           console.log(error)
         })
      },
      listArt() {
      //se traen los datos de la BD
      //Se necesitará Token
      //ya esta instalado Axios
      //se hace peticion para guardar el resultado en la variable variable articulos: [],
      axios
        .get("/api/articulo/list")
        .then((response) => {
          this.articulos = response.data;
          this.cargando = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    }
}
</script>
<style scoped>
#services{
    padding-top: 80px !important;
}

h2{
    color: #00ACC1;
    text-align: left !important;
}

.modal-content{
    max-height: 600px !important;
    overflow: scroll;
}

.mdl-bdy{
    max-height: 300px !important;
    padding: 1rem;
}

</style>