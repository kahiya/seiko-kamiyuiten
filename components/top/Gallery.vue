<template>
  <div class="page-root" id="gallery">
    <div class="page-block fuwa" ref="fuwa">
      <img
        src="@/assets/images/toppage-title_gallery.svg"
        class="section-title"
        alt=""
      />
      <article id="gallery" class="container">
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
      </article>

      <div class="btn-block">
        <a href="/gallery" class="nomal-btn shippori">view more</a>
      </div>
    </div>
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
      visible: false,
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
      ],
      index: null,
    };
  },
  mounted() {
    this.observeIntersection("fuwa");
  },
  methods: {},
};
</script>
<style scoped lang="scss">
#gallery {
  margin-top: 100px;
  width: 100%;

  @include mq-m {
    margin-top: 20px;
  }
}

.container {
  margin: 5vw auto 5vw;

  align-items: left;
  text-align: center;
  font-size: 15px;
  gap: 20px;
  flex-wrap: wrap;
  display: grid;

  @include mq-d {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }

  @include mq-m {
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
  }
}

.container > * {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
