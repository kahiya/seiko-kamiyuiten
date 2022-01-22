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
}

#intro-box1 {
  height: clamp(400px, 40vw, 595px);
  width: clamp(600px, 98vw, 1000px);
}

#intro-img1 {
  position: absolute;
  right: 0;
  bottom: 0;
  width: clamp(400px, 75vw, 800px);
  height: clamp(400px, 40vw, 595px);
  object-fit: cover;
  z-index: 2;
}

#text-box1 {
  position: absolute;
  left: 0;
  top: 20%;
  background-color: rgba(255, 255, 255, 0.9);
  width: clamp(320px, 35vw, 400px);
  height: clamp(200px, 30vw, 330px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* intro2 --------------------------------------------*/
#intro-box2 {
  height: clamp(400px, 40vw, 595px);
  width: clamp(600px, 98vw, 1000px);
}

#intro-img2 {
  position: absolute;
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
  top: 20%;
  background-color: rgba(255, 255, 255, 0.9);
  width: clamp(320px, 35vw, 400px);
  height: clamp(200px, 30vw, 330px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* intro3 --------------------------------------------*/
#intro-box3 {
  height: clamp(400px, 40vw, 595px);
  width: clamp(600px, 98vw, 3000px);
}

#intro-img3 {
  position: absolute;
  right: 0;
  bottom: 0;
  width: clamp(400px, 75vw, 800px);
  height: clamp(400px, 40vw, 595px);
  object-fit: cover;
  z-index: 2;
}

#text-box3 {
  position: absolute;
  left: 0;
  top: 20%;
  background-color: rgba(255, 255, 255, 0.9);
  width: clamp(320px, 35vw, 400px);
  height: clamp(200px, 30vw, 330px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* intro4 --------------------------------------------*/
#intro-box4 {
  height: clamp(400px, 40vw, 595px);
  width: clamp(600px, 98vw, 1000px);
}

#intro-img4 {
  position: absolute;
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
  top: 20%;
  background-color: rgba(255, 255, 255, 0.9);
  width: clamp(320px, 35vw, 400px);
  height: clamp(200px, 30vw, 330px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
