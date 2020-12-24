<template>
<div>
   <footer class="bg-green mt-5">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-sm-12 col-md-12 my-3">
                    <h3 class="text-center text-light my-5">MINTIC 2022 - UTP - Ciclo 3 - Grupo 28</h3>
                </div>
            </div>
            <div class="row d-flex align-items-center">
                <div class="col-sm-12 col-md-6 my-3">
                    <h5 class="text-center text-white">
                        Michael Arias
                    </h5>
                    <p class="text-white text-center ml-5">
                        <em>marias@purificacionagua.com <br> 555-55-55 ext 101 </em>
                    </p>
                    <h5 class="text-center text-white">
                        Carlos Ruiz
                    </h5>
                    <p class="text-white text-center ml-5">
                        <em>cruiz@purificacionagua.com <br> 555-55-55 ext 102 </em>
                    </p>
                    <h5 class="text-center text-white">
                        Daniel Eslava
                    </h5>
                    <p class="text-white text-center ml-5">
                        <em>deslava@purificacionagua.com <br> 555-55-55 ext 103 </em>
                    </p>
                    <h5 class="text-center text-white">
                        Heywin Meneses
                    </h5>
                    <p class="text-white text-center ml-5">
                        <em>hmeneses@purificacionagua.com <br> 555-55-55 ext 104 </em>
                    </p>
                    <h5 class="text-center text-white">
                        Fabian Tadeo
                    </h5>
                    <p class="text-white text-center ml-5">
                        <em>ftadeo@purificacionagua.com <br> 555-55-55 ext 105 </em>
                    </p>
                </div>
                <div class="col-sm-12 col-md-6">
                    <h2 class="text-center">
                        <a href="https://github.com/Maikpwwq/Semana-4-28-frontend" target="_blank">
                            <img src="../../public/img/logoGit.png" class="img-flui" width="30%" alt="">
                        </a>
                    </h2>
                    <br>
                    <p class="text-center text-light">
                        Bogotá - Santa Marta - Soacha - Pereira
                    </p>
                    <div class ="text-center w-100">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127248.55141992215!2d-74.19494987829628!3d4.679779468814669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8482ae9f1b6f%3A0xda6f84c963a00f4a!2sPTAR%20El%20Salitre!5e0!3m2!1ses!2sco!4v1608816260319!5m2!1ses!2sco" width="500" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
                
            </div>

        </div>
    </footer>
</div>
    
</template>
<script>
export default {
    name: 'SecFooter'
}
</script>
<style scoped>
footer.wrap-footer {
  background-color: #333333;
  width: 100%;
  bottom: 0; }

.wrap-footer .container .row .col-4.col-md-3 img.img-fluid {
  margin: 0.75rem 0;
  width: auto;
  max-height: 40px; }

.bg-green{
    background:#4faf57;
}

.wrap-footer .container .row .col-8.col-md-9 ul.nav {
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end; }

.wrap-footer .container .row .col-8.col-md-9 .nav li.nav-item {
  justify-items: center; }

.wrap-footer .container .row .col-8.col-md-9 .nav .nav-item a {
  color: #fff;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease; }

.wrap-footer .container .row .col-8.col-md-9 .nav .nav-item a:hover {
  color: #999; }
</style>