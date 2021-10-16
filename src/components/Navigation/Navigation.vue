<template>
   <div class="d-flex justify-space-around w-100">
       <router-link to="/">Home</router-link>
       <router-link to="/videos">Videos</router-link>
       <router-link to="/gallery">Gallery</router-link>
       <router-link to="/contact">Contact</router-link>
   </div>
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
</style>
