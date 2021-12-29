<template>
    <div id="mm-container">
        <div class="title" ref="title" id="mm-title">
            <h1>MATE MILICEVIC BAND</h1>
        </div>
        <members/>
        <gallery-preview/>
    </div>
</template>

<script>
    import Members from '../components/Homepage/Members/Members.vue';
    import GalleryPreview from '../components/Homepage/GalleryPreview/GalleryPreview.vue';

    export default {
        name: 'Home',
        components: {
            'members': Members,
            'gallery-preview': GalleryPreview,
        },
        mounted(){
            let title = document.getElementById('mm-title');
            window.addEventListener('scroll', () => {
                let offset = window.scrollY;
                title.style.backgroundPositionY = offset * (-0.7)+ 'px';
            })
        }
    }
</script>


<style lang="scss">
    #mm-container {

    }

    .title {
        background-image: url('../../src/assets/MateMilicevicBandBackground.jpeg');
        background-attachment: fixed;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
</style>
