<script>
import DataTableUsuario from '../components/DataTableUsuario.vue'

export default {
    name: 'TablaUsuarios',
    components: {
        DataTableUsuario,
    }
}
</script>

<template>
    <div class="usuarios">
        <data-table-usuario></data-table-usuario>
    </div>
</template>
