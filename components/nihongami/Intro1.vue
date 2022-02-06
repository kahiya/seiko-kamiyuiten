<template>
  <div class="page-inner shippori page-block fuwa" ref="fuwa">
    <!-- intro1 ------------------------------------------->

    <div id="intro-box1" class="intro-box">
      <div id="text-box1">
        世界広しと言えども、このように複雑かつ美しい髪型を庶民までもが結っていた歴史は日本にしか無いのではないでしょうか。
      </div>
      <img
        id="intro-img1"
        src="@/assets/images/02.jpg"
        class="section-img"
        alt=""
      />
    </div>
    <!-- intro2 ------------------------------------------->
    <div id="intro-box2" class="intro-box">
      <div id="text-box2">
        髪を丁寧にすき、黒髪の手入れを怠らない程の美にかける情熱。そこには「日常を丁寧に生きる」日本人の姿がありました。
      </div>
      <img
        id="intro-img2"
        src="@/assets/images/02.jpg"
        class="section-img"
        alt=""
      />
    </div>
    <!-- intro3 ------------------------------------------->

    <div id="intro-box3" class="intro-box">
      <div id="text-box3">
        ゆったりとした時間。季節を感じ、自然と共に生き、質素な中にも思い思いの工夫を凝らして暮らす、心豊かな生活。
      </div>
      <img
        id="intro-img3"
        src="@/assets/images/02.jpg"
        class="section-img"
        alt=""
      />
    </div>
    <!-- intro4 ------------------------------------------->
    <div id="intro-box4" class="intro-box">
      <div id="text-box4">
        毎日忙しく生きる現代人とはまったくかけ離れた文化が、そう遠くない過去にありました。
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
export default {
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.observeIntersection("fuwa");
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.intro-box {
  position: relative;

  @include mq-d {
    margin-bottom: 100px;
  }

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
    bottom: 0;
    width: 65vw;
    height: 40vw;
    padding: 6vw;
    font-size: clamp(12px, 3vw, 14px);
    line-height: 1.7;
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
