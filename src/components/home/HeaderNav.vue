<template>
    <div>
        <!-- INICIO Header -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Naga | Regeneración de aguas</a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#description">Descripción</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#stories">Casos de éxito</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <a class="btn btn-dark my-2 my-sm-0 text-white" href="/login">LOGIN</a>
                </form>
            </div>
        </nav>
        <!-- FIN Header -->
    </div>

</template>
<script>
export default {
    name: 'HeaderNav'
}
</script>
<style lang="stylus" scoped>
</style>