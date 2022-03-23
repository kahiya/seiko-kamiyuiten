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
    height: 70vh;
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
    height: 70vh;
    background-position: 25% center;
  }
}

#hero-img1 {
  background-image: url(@/assets/images/hero-img.jpg);
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

#hero-img2 {
  background-image: url(@/assets/images/02.jpg);
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
}

#hero-img3 {
  background-image: url(@/assets/images/03.jpg);
  -webkit-animation-delay: 10s;
  animation-delay: 10s;
}

#hero-img4 {
  background-image: url(@/assets/images/04.jpg);
  -webkit-animation-delay: 15s;
  animation-delay: 15s;
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
