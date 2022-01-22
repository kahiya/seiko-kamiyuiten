<template>
  <div class="page-inner shippori page-block">
    <!-- intro1 ------------------------------------------->

    <div id="intro-box1" class="intro-box">
      <div id="text-box1">今もむかしも変わらぬ想いを</div>
      <img
        id="intro-img1"
        src="@/assets/images/02.jpg"
        class="section-img"
        alt=""
      />
    </div>
    <!-- intro2 ------------------------------------------->
    <div id="intro-box2" class="intro-box">
      <div id="text-box2">今もむかしも変わらぬ想いを</div>
      <img
        id="intro-img2"
        src="@/assets/images/02.jpg"
        class="section-img"
        alt=""
      />
    </div>
    <!-- intro3 ------------------------------------------->

    <div id="intro-box3" class="intro-box">
      <div id="text-box3">今もむかしも変わらぬ想いを</div>
      <img
        id="intro-img3"
        src="@/assets/images/02.jpg"
        class="section-img"
        alt=""
      />
    </div>
    <!-- intro4 ------------------------------------------->
    <div id="intro-box4" class="intro-box">
      <div id="text-box4">今もむかしも変わらぬ想いを</div>
      <img
        id="intro-img4"
        src="@/assets/images/02.jpg"
        class="section-img"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.intro-box {
  position: relative;
  margin-bottom: 100px;

  @include mq-m {
    margin-bottom: 15vw;
    width: 100%;
    height: 60vh;
  }
}

#intro-box1 {
  height: clamp(400px, 40vw, 595px);
  width: clamp(600px, 98vw, 1000px);

  @include mq-m {
    width: 100%;
  }
}

#intro-img1 {
  position: relative;
  bottom: 0;
  width: clamp(400px, 75vw, 800px);
  height: clamp(400px, 40vw, 595px);
  object-fit: cover;
  z-index: 2;

  @include mq-d {
    left: 20vw;
  }

  @include mq-m {
    left: 10vw;
  }
}

#text-box1 {
  position: absolute;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  width: clamp(320px, 35vw, 400px);
  height: clamp(200px, 30vw, 330px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  @include mq-d {
    top: 20%;
  }

  @include mq-m {
    position: absolute;
    bottom: 0;
    width: 65vw;
    height: 40vw;
  }
}

/* intro2 --------------------------------------------*/
#intro-box2 {
  height: clamp(400px, 40vw, 595px);
  width: clamp(600px, 98vw, 1000px);

  @include mq-m {
    width: 100%;
  }
}

#intro-img2 {
  position: relative;
  left: 0;
  bottom: 0;
  width: clamp(400px, 75vw, 800px);
  height: clamp(400px, 40vw, 595px);
  object-fit: cover;
  z-index: 2;
}

#text-box2 {
  position: absolute;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  width: clamp(320px, 35vw, 400px);
  height: clamp(200px, 30vw, 330px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  @include mq-d {
    top: 20%;
  }

  @include mq-m {
    position: absolute;
    bottom: 0;
    width: 65vw;
    height: 40vw;
  }
}

/* intro3 --------------------------------------------*/
#intro-box3 {
  height: clamp(400px, 40vw, 595px);
  width: clamp(600px, 98vw, 1000px);

  @include mq-m {
    width: 100%;
  }
}

#intro-img3 {
  position: relative;
  bottom: 0;
  width: clamp(400px, 75vw, 800px);
  height: clamp(400px, 40vw, 595px);
  object-fit: cover;
  z-index: 2;

  @include mq-d {
    left: 20vw;
  }

  @include mq-m {
    left: 10vw;
  }
}

#text-box3 {
  position: absolute;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  width: clamp(320px, 35vw, 400px);
  height: clamp(200px, 30vw, 330px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  @include mq-d {
    top: 20%;
  }

  @include mq-m {
    position: absolute;
    bottom: 0;
    width: 65vw;
    height: 40vw;
  }
}

/* intro4 --------------------------------------------*/
#intro-box4 {
  height: clamp(400px, 40vw, 595px);
  width: clamp(600px, 98vw, 1000px);

  @include mq-m {
    width: 100%;
  }
}

#intro-img4 {
  position: relative;
  left: 0;
  bottom: 0;
  width: clamp(400px, 75vw, 800px);
  height: clamp(400px, 40vw, 595px);
  object-fit: cover;
  z-index: 2;
}

#text-box4 {
  position: absolute;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  width: clamp(320px, 35vw, 400px);
  height: clamp(200px, 30vw, 330px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  @include mq-d {
    top: 20%;
  }

  @include mq-m {
    position: absolute;
    bottom: 0;
    width: 65vw;
    height: 40vw;
  }
}
</style>
