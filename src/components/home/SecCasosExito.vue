<template>
    <div id="stories" class="container SecCasos pb-5">
        <div>
            <h2 class="text-center font-weight-normal pl-5 ml-5">Casos de éxito</h2>
        </div>
    
        <div class="row justify-content-evenly">
            <div class="mt-5 pt-5 col-sm-12 col-md-4">

                <div class="card bg-light border border-info shadow">
                    <!-- <img :src="member.image" class="card-img-top mx-auto d-block mt-3" alt="Logo cliente" style="border-radius: 50%; width: 50%;"> -->
                    <img src="../../../public/img/cs-1.jpg" class="card-img-top mx-auto d-block mt-3" alt="Reducción contaminantes" style="width: 50%;">
                    <div class="card-body">
                        <h4 class="card-title text-light text-center">Reducción de contaminantes</h4>
                        <p class="card-text text-dark text-center"><em>Gracias a la mejora continua en nuestros procesos hemos reducido a un 98% el material particulado en nuestros procesos de purificación de agua.<br><br></em></p>
                    </div>
                </div>
            </div>

            <div class="mt-5 pt-5 col-sm-12 col-md-4">

                <div class="card bg-light border border-info shadow">
                    <!-- <img :src="member.image" class="card-img-top mx-auto d-block mt-3" alt="Logo cliente" style="border-radius: 50%; width: 50%;"> -->
                    <img src="../../../public/img/cs-2.jpg" class="card-img-top mx-auto d-block mt-3" alt="Logo cliente" style="width: 50%;">
                    <div class="card-body">
                        <h4 class="card-title text-light text-center">Gobernación de cundinamarca</h4>
                        <p class="card-text text-dark text-center"><em>Gracias a el apoyo de entidades estatales hemos logrado realizar el alcance de varios proyectos en el municipio de Cundinamarca. Reduciendo los contaminantes de los rios que atraviesan la región.</em></p>
                    </div>
                </div>
            </div>

            <div class="mt-5 pt-5 col-sm-12 col-md-4">

                <div class="card bg-light border border-info shadow">
                    <img src="../../../public/img/cs-3.jpg" class="card-img-top mx-auto d-block mt-7" alt="Logo cliente" style="width: 50%;">
                    <div class="card-body">
                        <!-- <h4 class="card-title text-light text-center">{{member.nombre}}</h4> -->
                        <h4 class="card-title text-light text-center">Acceso a comunidades indígenas</h4>
                        <p class="card-text text-dark text-center"><em>Gracias al apoyo de varias ONG hemos logrado un acueducto para la comunidad indígena de San Juan del Cesar, logrando con esto el reconocimiento como una empresa en pro de la humanidad.</em></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'SecCasosExito'
}
</script>
<style scoped>
#stories{
    padding-top: 80px !important;
}

h2{
    color: #00ACC1;
    text-align: left !important;
}

.card{
    border-radius: 80px 10px 80px 10px;
    padding: 1rem;
}

.card-title{
    background-color: #17a2b8;
    padding: 0.4rem;
    border-radius: 20px;
}


</style>