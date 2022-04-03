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
          src: require("@/assets/images/gallery-img/gallery-photo-1.jpg"),
          alt: "Alt 1",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-1.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-2.jpg"),
          alt: "Alt 2",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-2.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-3.jpg"),
          alt: "Alt 3",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-3.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-4.jpg"),
          alt: "Alt 4",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-4.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-5.jpg"),
          alt: "Alt 5",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-5.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-6.jpg"),
          alt: "Alt 6",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-6.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-7.jpg"),
          alt: "Alt 7",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-7.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-8.jpg"),
          alt: "Alt 8",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-8.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-9.jpg"),
          alt: "Alt 9",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-9.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-10.jpg"),
          alt: "Alt 10",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-10.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-11.jpg"),
          alt: "Alt 11",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-11.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-12.jpg"),
          alt: "Alt 12",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-12.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-13.jpg"),
          alt: "Alt 13",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-13.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-14.jpg"),
          alt: "Alt 14",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-14.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-15.jpg"),
          alt: "Alt 15",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-15.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-16.jpg"),
          alt: "Alt 16",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-16.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-17.jpg"),
          alt: "Alt 17",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-17.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-18.jpg"),
          alt: "Alt 18",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-18.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-19.jpg"),
          alt: "Alt 19",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-19.jpg"),
        },
        {
          src: require("@/assets/images/gallery-img/gallery-photo-20.jpg"),
          alt: "Alt 20",
          thumbnail: require("@/assets/images/gallery-img/gallery-photo-20.jpg"),
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
  height: 100%;
  object-fit: cover;

  @include mq-m {
    width: 100%;
    height: 150px;
  }
}
</style>
