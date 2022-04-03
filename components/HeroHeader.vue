<template>
  <div class="hero-img-wrap">
    <ul class="fade">
      <li id="hero-img1" class="hero-img"></li>
      <li id="hero-img2" class="hero-img"></li>
      <li id="hero-img3" class="hero-img"></li>
      <li id="hero-img4" class="hero-img"></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.hero-img-wrap {
  width: 100%;
  height: 680px;
  overflow: hidden;
  position: relative;

  @include mq-m {
    height: 90vh;
  }
}

.hero-img {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 680px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  left: 0;
  top: 0;
  animation: bgAnime 20s infinite;
  background-attachment: fixed;

  @include mq-m {
    height: 90vh;
    background-position: center;
  }
}

#hero-img1 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;

  @include mq-d {
    background-image: url(@/assets/images/hero-img1.jpg);
  }

  @include mq-m {
    background-image: url(@/assets/images/hero-img1-mb.jpg);
  }
}

#hero-img2 {
  -webkit-animation-delay: 5s;
  animation-delay: 5s;

  @include mq-d {
    background-image: url(@/assets/images/hero-img2.jpg);
  }

  @include mq-m {
    background-image: url(@/assets/images/hero-img2-mb.jpg);
  }
}

#hero-img3 {
  -webkit-animation-delay: 10s;
  animation-delay: 10s;

  @include mq-d {
    background-image: url(@/assets/images/hero-img3.jpg);
  }

  @include mq-m {
    background-image: url(@/assets/images/hero-img3-mb.jpg);
  }
}

#hero-img4 {
  -webkit-animation-delay: 15s;
  animation-delay: 15s;

  @include mq-d {
    background-image: url(@/assets/images/hero-img4.jpg);
  }

  @include mq-m {
    background-image: url(@/assets/images/hero-img4-mb.jpg);
  }
}

@keyframes bgAnime {
  0% {
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
