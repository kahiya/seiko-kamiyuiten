<template>
  <div class="container page-block">
    <no-ssr>
      <Tinybox v-model="index" :images="images"></Tinybox>
      <img
        v-for="(img, idx) in images"
        :src="img.thumbnail"
        :alt="img.alt"
        class="open-tinybox img-box"
        @click="index = idx"
      />
    </no-ssr>
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
        {
          src: "https://picsum.photos/id/256/1500/600",
          alt: "Alt 3",
          thumbnail: "https://picsum.photos/id/256/200",
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
  margin: 10vw auto;

  align-items: left;
  text-align: center;
  font-size: 15px;
  gap: 20px;
  flex-wrap: wrap;
  display: grid;

  @include mq-d {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }

  @include mq-m {
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
  }
}

.container > * {
  width: 100%;
}
</style>
