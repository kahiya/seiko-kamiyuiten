<template>
  <div class="page-inner shippori page-block">
    <img src="@/assets/images/mizuhiki.svg" class="page-top-icon" alt="" />
    <!-- intro1 ------------------------------------------->

    <div id="intro-box1" class="intro-box">
      <div id="text-box1">人生において大事な節目の一瞬。</div>
      <img
        id="intro-img1"
        src="@/assets/images/torayome-8440.jpg"
        class="section-img"
        alt=""
      />
    </div>
    <!-- intro2 ------------------------------------------->
    <div id="intro-box2" class="intro-box">
      <div id="text-box2">
        両家を結び付け、親交のある人や地域社会との繋がりをより強くし、新郎新婦が新しい家族となってこれからの未来を作っていく大切な人生儀礼の場。
      </div>
      <img
        id="intro-img2"
        src="@/assets/images/top_menu_2.png"
        class="section-img"
        alt=""
      />
    </div>
    <!-- intro3 ------------------------------------------->

    <div id="intro-box3" class="intro-box">
      <div id="text-box3">
        「装い」とは「よそほひ」。支度を取りそろえ、綺麗に整えることを言います。新しい門出に際し、自身の身を整えることはケジメをつけ、周りの人へご挨拶する為にもとても大事なこと。
      </div>
      <img
        id="intro-img3"
        src="@/assets/images/bridal-img1.jpg"
        class="section-img"
        alt=""
      />
    </div>
    <!-- intro4 ------------------------------------------->
    <div id="intro-box4" class="intro-box">
      <div id="text-box4">
        連綿と続く日本の和の文化。 家族に感謝を捧げるこころ。
      </div>
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
.page-top-icon {
  margin-bottom: 5vw;
}

%text-box {
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);

  @include mq-d {
    padding: 4vw;
    width: clamp(320px, 35vw, 400px);
    height: clamp(200px, 30vw, 330px);
    top: 20%;
    font-size: 16px;
    line-height: 1.8;
  }

  @include mq-m {
    position: absolute;
    bottom: -13vh;
    width: 65vw;
    height: 40vw;
    padding: 6vw;
    font-size: clamp(12px, 3vw, 14px);
    line-height: 1.7;
  }
}

.intro-box {
  position: relative;
  margin-bottom: 100px;

  @include mq-m {
    margin-bottom: 23vw;
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
  @extend %text-box;

  left: 0;
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
  @extend %text-box;
  right: 0;
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
  @extend %text-box;

  left: 0;
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
  @extend %text-box;

  right: 0;
}
</style>
