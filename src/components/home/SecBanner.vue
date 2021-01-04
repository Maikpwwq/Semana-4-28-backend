<template>
<div>
      <!-- INICIO Carousel -->
      <div id="carouselExampleCaptions" class="container carousel slide carousel-fade p-0" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../../public/img/slide-1.png" class="d-block w-100"  alt="..." />
            <div class="carousel-caption d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="../../../public/img/slide-2.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="../../../public/img/slide-3.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Siguiente</span>
        </a>
      </div>
      <!-- FIN Carousel -->
</div>
    
</template>
<script>
export default {
    name: 'SecBanner'
}
</script>
<style scoped>
</style>