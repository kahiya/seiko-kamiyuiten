<template>
  <div class="hero-img-wrap">
    <ul>
      <li id="hero-img1" class="hero-img"></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.hero-img {
  width: 100%;

  @include mq-m {
    height: 500px;
    object-fit: cover;
  }
}

.hero-img-wrap {
  height: 680px;
  overflow: hidden;
  //  position: relative;

  @include mq-m {
    height: 70vh;
  }
}

.hero-img {
  z-index: 10;
  //  opacity: 0;
  width: 100%;
  height: 680px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // position: absolute;
  left: 0;
  top: 0;
  // -webkit-animation: anime 18s 0s infinite;
  // animation: anime 18s 0s infinite;

  @include mq-m {
    height: 70vh;
    background-position: 25% center;
  }
}

#hero-img1 {
  background-image: url(@/assets/images/hero-img.jpg);
}

#hero-img2 {
  background-image: url(@/assets/images/02.jpg);
  -webkit-animation-delay: 6s;
  animation-delay: 6s;
}

#hero-img3 {
  background-image: url(@/assets/images/03.jpg);
  -webkit-animation-delay: 12s;
  animation-delay: 12s;
}

#hero-img4 {
  background-image: url(@/assets/images/04.jpg);
  -webkit-animation-delay: 18s;
  animation-delay: 18s;
}

#hero-img5 {
  background-image: url(@/assets/images/05.jpg);
  -webkit-animation-delay: 24s;
  animation-delay: 24s;
}

#hero-img6 {
  background-image: url(@/assets/images/06.jpg);
  -webkit-animation-delay: 32s;
  animation-delay: 32s;
}

// @keyframes anime {
//   0% {
//     opacity: 0;
//   }
//   8% {
//     opacity: 1;
//   }
//   20% {
//     opacity: 1;
//   }
//   50% {
//     opacity: 0;

//     z-index: 9;
//   }
//   100% {
//     opacity: 0;
//   }
// }
</style>
