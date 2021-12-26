<template>
    <div id="mm-video">
        <!--       <h1>VIDEO</h1>-->
        <video-embed :src="selectedVideo.url" ref="youtube"
                     :params="embed_video_params"
        ></video-embed>
<!--        <div class="video-box-container">-->
<!--            <div class="video-box" v-for="video in videos" :key="video.id" @click="selectVideo(video)"-->
<!--                 :style="{-->
<!--                    'background-image': 'url(' + video.thumbnail + ')',-->
<!--                }">-->
<!--                <b-icon-play-btn-fill font-scale="4"></b-icon-play-btn-fill>-->
<!--                <div class="overlay"-->
<!--                     :style="{-->
<!--                            'background-color': selectedVideo.url === video.url-->
<!--                                                ? 'rgba(255, 255, 255, 0.3)'-->
<!--                                                : 'rgba(255, 255, 255, 0)'-->
<!--                         }"-->
<!--                ></div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
export default {
    name: "VideoSection",
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
                    id: "0",
                    title: "Video 1", url: "https://www.youtube.com/embed/iQ1VnpeGF3E",
                    thumbnail: "https://img.youtube.com/vi/iQ1VnpeGF3E/mqdefault.jpg"
                },
                {
                    id: "1",
                    title: "Video 2", url: "https://www.youtube.com/watch?v=4D7gzf1BapM",
                    thumbnail: "https://img.youtube.com/vi/4D7gzf1BapM/mqdefault.jpg"
                },
                {
                    id: "2",
                    title: "Video 3", url: "https://www.youtube.com/watch?v=QPZY-YQnPlE",
                    thumbnail: "https://img.youtube.com/vi/QPZY-YQnPlE/mqdefault.jpg"
                },
                {
                    id: "3",
                    title: "Video 4", url: "https://www.youtube.com/watch?v=6UmROHoLb-4",
                    thumbnail: "https://img.youtube.com/vi/6UmROHoLb-4/mqdefault.jpg"
                },
                // {
                //     id: "4",
                //     title: "Video 1", url: "https://www.youtube.com/watch?v=5r_MS-ORkjI",
                //     thumbnail: "https://img.youtube.com/vi/5r_MS-ORkjI/mqdefault.jpg"
                // },
                // {
                //     id: "5",
                //     title: "Video 2", url: "https://www.youtube.com/watch?v=4D7gzf1BapM",
                //     thumbnail: "https://img.youtube.com/vi/4D7gzf1BapM/mqdefault.jpg"
                // },
                // {
                //     id: "6",
                //     title: "Video 3", url: "https://www.youtube.com/watch?v=QPZY-YQnPlE",
                //     thumbnail: "https://img.youtube.com/vi/QPZY-YQnPlE/mqdefault.jpg"
                // },
                // {
                //     id: "7",
                //     title: "Video 4", url: "https://www.youtube.com/watch?v=6UmROHoLb-4",
                //     thumbnail: "https://img.youtube.com/vi/6UmROHoLb-4/mqdefault.jpg"
                // },
            ]
        }
    },
    computed: {
        selectedVideo: {
            get() {
                return {url: "https://www.youtube.com/embed/iQ1VnpeGF3E", id: "0"}
            },
            set(newVideo) {
                return newVideo
            }
        }
    },
    methods: {
        selectVideo(video) {
            this.$refs.youtube.src = video.url;
            console.log("%c SELECTED VIDEO", "color:blue;", video);
        }
    }
}
</script>

<style scoped lang="scss">
#mm-video {
    background-color: $russian-violet;
    color: #fff;
    padding-top:100px;
    h1 {
        margin-bottom: 40px;
    }

    .video-box-container {
        display: flex;
        justify-content: center;
        overflow-x: scroll;
        gap: 30px;
        //flex-wrap: wrap;
        .video-box {
            border: 1px solid gold;
            min-width: 300px;
            min-height: 300px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            cursor: pointer;
            position: relative;

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
