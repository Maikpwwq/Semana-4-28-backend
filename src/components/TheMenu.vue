<template>
    <v-app-bar app>      
        <v-spacer></v-spacer>      
        <v-tabs
            color="deep-purple accent-4"
            right
            >           
            <template v-if="!this.$store.state.user">
                <v-tab>
                    <router-link :to="{ name: 'Login'}"
                        class="mr-5 ml-5" exact> 
                        Login 
                    </router-link>
                </v-tab>
                <v-tab>
                    <router-link :to="{name:'SignUp'}"
                        class="mr-5 ml-5" exact>
                        Registrarse 
                    </router-link>
                </v-tab>
                <v-tab>
                    <router-link :to="{name:'Portafolio'}"
                        class="mr-5 ml-5" exact>
                        Portafolio
                    </router-link>
                </v-tab>
            </template>

            <template v-else>
                <v-tab>
                    <router-link :to="{name:'Dashboard'}"
                        class="mr-5 ml-5" exact>
                        Dashboard 
                    </router-link>
                </v-tab>
                <v-tab>
                    <router-link :to="{name:'Portafolio'}"
                        class="mr-5 ml-5" exact>
                        Portafolio
                    </router-link>
                </v-tab>                
            </template>

        </v-tabs>
    </v-app-bar>
</template>

<script>
export default {
    name: 'TheMenu',
}
</script>