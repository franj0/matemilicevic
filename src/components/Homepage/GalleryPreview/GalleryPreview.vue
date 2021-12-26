<template>
    <div id="mm-gallery">
            <h1>Gallery preview</h1>
        <b-img v-for="(img, key) in gallery" :key="key" :src="img.thumb" width="100px" height="100px"/>
        <LightBox :media="gallery" v-if="displayGallery"></LightBox>
    </div>
</template>

<script>
    import LightBox from 'vue-it-bigger'
    import('vue-it-bigger/dist/vue-it-bigger.min.css') // when using webpack
    export default {
        name: "GalleryPreview",
        components:{
            LightBox
        },
        data(){
            return {
                displayGallery: false
            }
        },
        computed:{
            gallery:{
                get(){
                    return [
                        { // For an image
                            type: 'image', // Can be omitted for image
                            thumb: 'https://i1.sndcdn.com/avatars-000355985468-4ef4s3-t240x240.jpg',
                            src: 'https://i1.sndcdn.com/avatars-000355985468-4ef4s3-t240x240.jpg',
                            caption: 'Caption to display. HTML <b>enabled</b>', // Optional
                            srcset: '...' // Optional for displaying responsive images
                        },
                        { // For a YouTube video
                            type: 'youtube',
                            thumb: 'https://img.youtube.com/vi/WsptdUFthWI/hqdefault.jpg',
                            id: 'WsptdUFthWI',
                            caption: 'HTML <b>enabled</b> caption to display' // Optional
                        },
                        { // For a video that can be played in the <video> tag
                            type: 'video',
                            thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
                            sources: [
                                {
                                    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
                                    type: 'video/mp4'
                                }
                            ],
                            caption: '<h4>Monsters Inc.</h4>',
                            width: 800, // Required
                            height: 600, // Required
                            autoplay: true // Optional: Autoplay video when the lightbox opens
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
