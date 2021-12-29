<template>
    <div id="mm-gallery">
        <div>
            <b-tabs align="center" v-model="selectedTab" nav-class="tabs-class">
                <b-tab title="VIDEOS" active  title-link-class="title-link-class"/>
                <b-tab title="PICTURES" title-link-class="title-link-class"/>
            </b-tabs>
            <videos v-if="selectedTab === 0" />
            <pictures v-if="selectedTab === 1" />
        </div>

    </div>
</template>

<script>
    import Pictures from "./Pictures";
    import Videos from "./Videos";
    export default {
        name: "GalleryPreview",
        components:{
          "pictures": Pictures,
          "videos": Videos
        },
        data(){
            return {
                selectedTab: 0
            }
        },
        methods: {

        }
    }
</script>

<style  lang="scss">
    #mm-gallery{
        // styles for tabs navigation
        .tabs-class{
            background: linear-gradient(-90deg, $russian-violet 50%, $dark-purple 75%);
            background: -moz-linear-gradient(-90deg, $russian-violet 50%, $dark-purple 75%);
            background: -webkit-linear-gradient(-90deg, $russian-violet 50%, $dark-purple 75%);

            //filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#24003a", endColorstr="#190028", GradientType=1 );
            border-bottom:0 !important;
            padding:100px 0;
        }
        .title-link-class{
            background-color: transparent;
            border:0;
            outline:0;
            font-size:28px;
        }
    }
</style>
