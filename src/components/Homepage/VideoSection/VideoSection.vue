<template>
   <div id="mm-video">
       <h1>VIDEO</h1>
       <video-embed :src="selectedVideo.url" ref="youtube"
                    :params="embed_video_params"
       ></video-embed>
       <div class="video-box-container">
           <div class="video-box" v-for="video in videos" :key="video.url">
               <button @click="selectVideo(video)">{{video.title}}</button>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "VideoSection",
        data(){
            return {
                embed_video_params: {
                    width:"100%",
                    height: "600px",
                    title: "YouTube video player",
                    frameborder: "0",
                    accelerometer: true,
                    autoplay: 1, allowfullscreen: 1

                },
                videos:[
                    {
                        title: "Video 1", url: "https://www.youtube.com/watch?v=5r_MS-ORkjI",
                        thumbnail:"../../../assets/son-goku-dragon-ball-ultra-instinct.jpg"
                    },
                    {
                        title: "Video 2", url: "https://www.youtube.com/watch?v=4D7gzf1BapM",
                        thumbnail:"../../../assets/son-goku-dragon-ball-ultra-instinct.jpg"
                    },
                    {
                        title: "Video 3", url: "https://www.youtube.com/watch?v=QPZY-YQnPlE",
                        thumbnail:"../../../assets/son-goku-dragon-ball-ultra-instinct.jpg"
                    },
                    {
                        title: "Video 4", url: "https://www.youtube.com/watch?v=6UmROHoLb-4",
                        thumbnail:"../../../assets/son-goku-dragon-ball-ultra-instinct.jpg"
                    },
                ]
            }
        },
        computed: {
            selectedVideo:{
                get(){
                    return {url: "https://www.youtube.com/embed/iQ1VnpeGF3E"}
                },
                set(newVideo){
                    return newVideo
                }
            }
        },
        methods:{
            selectVideo(video){
                this.$refs.youtube.src = video.url;
                console.log("%c SELECTED VIDEO", "color:blue;", video);
            }
        }
    }
</script>

<style scoped lang="scss">
    #mm-video{
      background-color: $dark-purple;
      color:#fff;
      padding:100px 0;
      h1{
        margin-bottom:40px;
      }
      .video-box-container{
        display: flex;
        justify-content: center;
        .video-box{
          width:150px; height:100px;
          display:flex;
          justify-content: center;
          align-items: center;
          background-image: url('../../../assets/son-goku-dragon-ball-ultra-instinct.jpg');
          background-position: center;
          background-size: contain;
        }
      }
    }
</style>
