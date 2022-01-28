<template>
  <div class="container page-block">
    <Tinybox v-model="index" :images="images"></Tinybox>
    <img
      v-for="(img, idx) in images"
      :src="img.thumbnail"
      :alt="img.alt"
      class="open-tinybox"
      @click="index = idx"
    />
  </div>
</template>

<script>
import Tinybox from "vue-tinybox";
export default {
  components: {
    tinybox: Tinybox,
  },

  data() {
    return {
      images: [
        {
          src: "https://picsum.photos/id/13/600/1000",
          alt: "Alt 1",
          thumbnail: "https://picsum.photos/id/13/200",
        },
        {
          src: "https://picsum.photos/id/42/800/600",
          alt: "Alt 2",
          thumbnail: "https://picsum.photos/id/42/200",
        },
        {
          src: "https://picsum.photos/id/256/1500/600",
          alt: "Alt 3",
          thumbnail: "https://picsum.photos/id/256/200",
        },
      ],
      index: null,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  @include mq-d {
    display: flex;
  }

  @include mq-m {
    flex-direction: columnz;
  }
}
</style>
