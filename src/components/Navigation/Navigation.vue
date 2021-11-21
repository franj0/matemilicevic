<template>
   <b-container fluid class="navigation-container bg-dark">
       <b-row align-v="center" class="h-100">
           <b-col>
               <div class="d-flex justify-space-around w-100">
                   <router-link to="/">Home</router-link>
                   <router-link to="/videos">Videos</router-link>
                   <router-link to="/gallery">Gallery</router-link>
                   <router-link to="/contact">Contact</router-link>
               </div>
           </b-col>
       </b-row>
   </b-container>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
    .d-flex{
        display:flex;
    }
    .justify-space-around{
        justify-content: space-around;
    }
    .w-100{
        width:100%
    }
    .navigation-container{
        position: fixed;
        bottom:36px;
        height:80px;
    }
</style>
