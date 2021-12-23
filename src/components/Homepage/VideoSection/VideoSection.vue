<template>
   <div>
       <h1>VIDEO</h1>
       <iframe width="100%"
               height="600px"
               :src="selectedVideo.url"
               title="YouTube video player"
               frameborder="0"
               allowfullscreen
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       >
       </iframe>
       <div>
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
                selectedVideo: {url: "https://www.youtube.com/embed/iQ1VnpeGF3E"},
                videos:[
                    {title: "Video 1", url: "https://www.youtube.com/watch?v=5r_MS-ORkjI"},
                    {title: "Video 2", url: "https://www.youtube.com/watch?v=4D7gzf1BapM"},
                    {title: "Video 3", url: "https://www.youtube.com/watch?v=QPZY-YQnPlE"},
                    {title: "Video 4", url: "https://www.youtube.com/watch?v=6UmROHoLb-4"},
                ]
            }
        },
        methods:{
            selectVideo(video){
                this.selectedVideo = video.url;
                console.log("%c SELECTED VIDEO", "color:blue;", video);
            }
        }
    }
</script>

<style scoped>

</style>
