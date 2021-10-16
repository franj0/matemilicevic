<template>
  <div id="mm-container">
    <slider />
    <members />
    <gallery-preview />
  </div>
</template>

<script>
import Slider from '../components/Homepage/Slider/Slider.vue';
import Members from '../components/Homepage/Members/Members.vue';
import GalleryPreview from '../components/Homepage/GalleryPreview/GalleryPreview.vue';
export default {
  name: 'Home',
  components: {
    'slider':Slider,
    'members': Members,
    'gallery-preview': GalleryPreview,
  }
}
</script>
