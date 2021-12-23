<template>
    <div id="mm-container">
        <!--<slider />-->
        <div class="title">
            <h1>MATE MILICEVIC</h1>
        </div>
        <members/>
        <video-section />
        <gallery-preview/>
    </div>
</template>

<script>
    // import Slider from '../components/Homepage/Slider/Slider.vue';
    import Members from '../components/Homepage/Members/Members.vue';
    import GalleryPreview from '../components/Homepage/GalleryPreview/GalleryPreview.vue';
    import VideoSection from '../components/Homepage/VideoSection/VideoSection.vue';

    export default {
        name: 'Home',
        components: {
            // 'slider':Slider,
            'members': Members,
            'gallery-preview': GalleryPreview,
            'video-section': VideoSection
        }
    }
</script>


<style lang="scss">
    #mm-container {
        background-image: url('../../src/assets/MateMilicevicBandBackground.jpeg');
        background-attachment: fixed;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        height: 100vh;
        width: 100%;
    }

    .title {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
</style>
