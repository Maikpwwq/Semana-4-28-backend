<template>
    <v-flex>
        <div>
            <v-row justify="end" class="mx-auto">
                <router-link :to="{ name: 'Portafolio'}" class="mr-5 ml-5" exact> Inicio </router-link>

                <template v-if="!this.$store.state.usuario">
                    <router-link :to="{name:'Login'}"
                        class="mr-5 ml-5" exact>
                        Login 
                    </router-link>

                    <router-link :to="{name:'Dashboard'}"
                        class="mr-5 ml-5" exact>
                        Dashboard 
                    </router-link>
                </template>
                <template v-else>

                </template>

            </v-row>
        </div>
    </v-flex>
</template>

<script>
export default {
    name: 'TheMenu',
}
</script>