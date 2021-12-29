<template>
    <div id="mm-pictures">
<!--        <div>-->
<!--            <b-img :src="require('../../../assets/mate-milicevic-avatar.jpg')"/>-->
<!--        </div>-->
        <div class="pictures-container">
            <b-img v-for="(img, key) in gallery"
                   :key="key"
                   :src="img.thumb"
                   width="100px" height="100px" @click="openGallery(key)"
            />
        </div>
        <LightBox ref="picturesLightbox" :media="gallery" :showLightBox="false"></LightBox>
    </div>
</template>

<script>
    import LightBox from 'vue-it-bigger'
    import('vue-it-bigger/dist/vue-it-bigger.min.css') // when using webpack
    export default {
        name: "Pictures",
        components:{
            LightBox,
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
        },
        methods: {
            openGallery(index) {
                this.$refs.picturesLightbox.showImage(index)
            }
        }
    }
</script>

<style lang="scss">
    #mm-pictures{
        background-color: $dark-purple;
        padding-bottom:100px;
        .pictures-container{
            display:flex;
            gap: 30px;
            justify-content: center;
            align-items: center;
        }
    }
</style>
