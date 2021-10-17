<template>
   <!--<div class="d-flex justify-space-around w-100">-->
       <!--<router-link to="/">Home</router-link>-->
       <!--<router-link to="/videos">Videos</router-link>-->
       <!--<router-link to="/gallery">Gallery</router-link>-->
       <!--<router-link to="/contact">Contact</router-link>-->
   <!--</div>-->
    <div class="center examplex">
        <vs-navbar hide-scroll center-collapsed v-model="active" shadow text-white dark fixed>
            <template #left>
                <img src="../../assets/logo.png" alt="" width="75px">
            </template>
            <vs-navbar-item to="/" :active="active === 'home'" id="home">
                Home
            </vs-navbar-item>
            <vs-navbar-item to="/videos" :active="active === 'videos'" id="videos">
                Videos
            </vs-navbar-item>
            <vs-navbar-item to="/gallery" :active="active === 'gallery'" id="gallery">
                Gallery
            </vs-navbar-item>
            <vs-navbar-item to="/contact" :active="active === 'contact'" id="contact">
                Contact
            </vs-navbar-item>
            <!--<template #right>-->
                <!--<vs-button flat >Login</vs-button>-->
                <!--<vs-button>Get Started</vs-button>-->
            <!--</template>-->
        </vs-navbar>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data(){
            return {
                active: "home"
            }
        }
    }
</script>

<style scoped></style>
