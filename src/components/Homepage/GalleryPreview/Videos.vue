<template>
    <div id="mm-videos">
        <video-embed :src="selectedVideo.src" ref="youtube" v-model="selectedVideo"
                     :params="embed_video_params"
        ></video-embed>
        <div class="video-box-container">
            <div class="video-box" v-for="(video, index) in videos" :key="video.id" @click="selectVideo(video)"
                 :style="{
                    'background-image': 'url(' + video.thumb + ')',
                }"
                v-on:click="openGallery(index)"
            >
                <b-icon-play-btn-fill font-scale="4" color="#fff"></b-icon-play-btn-fill>
                <div class="overlay"
                     :style="{
                            'background-color': selectedVideo.id === video.id
                                                ? 'rgba(255, 255, 255, 0.3)'
                                                : 'rgba(255, 255, 255, 0)'
                         }"
                ></div>
            </div>
        </div>

        <LightBox ref="videosLightbox" :media="videos" :showLightBox="false"></LightBox>
    </div>
</template>

<script>
import LightBox from 'vue-it-bigger'
import('vue-it-bigger/dist/vue-it-bigger.min.css') // when using webpack
export default {
    name: "Videos",
    components:{
        LightBox
    },
    data() {
        return {
            embed_video_params: {
                width: "100%",
                height: "600px",
                title: "YouTube video player",
                frameborder: "0",
                accelerometer: true,
                autoplay: 1, allowfullscreen: 1

            },
            videos: [
                {
                    id: "4D7gzf1BapM",
                    title: "Video 2",
                    src: "https://www.youtube.com/watch?v=4D7gzf1BapM",
                    thumb: "https://img.youtube.com/vi/4D7gzf1BapM/mqdefault.jpg",
                    type: "youtube",
                },
                {
                    id: "QPZY-YQnPlE",
                    title: "Video 3",
                    src: "https://www.youtube.com/watch?v=QPZY-YQnPlE",
                    thumb: "https://img.youtube.com/vi/QPZY-YQnPlE/mqdefault.jpg",
                    type: "youtube",
                },
                {
                    id: "6UmROHoLb-4",
                    title: "Video 4",
                    src: "https://www.youtube.com/watch?v=6UmROHoLb-4",
                    thumb: "https://img.youtube.com/vi/6UmROHoLb-4/mqdefault.jpg",
                    type: "youtube",
                },
            ]
        }
    },
    computed: {
        selectedVideo: {
            get() {
                return {src: "https://www.youtube.com/embed/iQ1VnpeGF3E", id: "0"}
            },
            set(newVideo) {
                return newVideo
            }
        }
    },
    methods: {
        selectVideo(video){
            this.$refs.youtube.src = video.src;
        },
        openGallery(index) {
            this.$refs.videosLightbox.showImage(index)
            this.selectVideo(this.videos[index]);
        }
    }
}
</script>

<style  lang="scss">
#mm-videos {
    .video-box-container {
        background: linear-gradient(-90deg, $dark-purple 50%, $russian-violet 75%);
        background: -moz-linear-gradient(-90deg, $dark-purple 50%, $russian-violet 75%);
        background: -webkit-linear-gradient(-90deg, $dark-purple 50%, $russian-violet 75%);
        padding: 100px 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        //flex-wrap: wrap;
        .video-box {
            position: relative;
            min-width: 300px;
            min-height: 300px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            cursor: pointer;

            svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .overlay {
                position: absolute;
                inset: 0;
                transition: background 0.3s;
                background-color: rgba(255, 255, 255, 0);
                &:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            }
        }
    }
}
</style>
