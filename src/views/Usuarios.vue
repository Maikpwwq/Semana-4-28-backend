<template>
    <div class="usuarios">
        <data-table-usuario></data-table-usuario>
    </div>    
</template>

<script>
import DataTableUsuario from '@/components/DataTableUsuario'

export default {
    name: 'Usuarios',
    components: {
        DataTableUsuario,
    }
}
</script>