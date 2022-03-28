<template>
  <div id="menu" class="page-root">
    <section class="menu-sec shippori fuwa" ref="fuwa">
      <img
        src="@/assets/images/toppage-title_menu.svg"
        class="section-title"
        alt=""
      />

      <a href="/nihongami" class="menu-link right">
        <div class="menu-right">
          <p class="menu-header">Menu</p>
          <p class="menu-title">普段の装い</p>
          <p class="menu-sub">日常を愉しむ日本髪</p>
          <p class="menu-btn">
            <span>view</span>

            <img src="@/assets/images/icon_arrow-bk.svg" alt="" class="arrow" />
          </p>
        </div>
        <img
          src="@/assets/images/top_menu_1-frame.svg"
          class="toppage_menu1-frame"
          alt=""
        />
      </a>
      <a href="/bridal" class="menu-link left">
        <div class="menu-left">
          <p class="menu-header">Menu</p>
          <p class="menu-title">御婚礼の装い</p>
          <p class="menu-sub">新しい門出の日本髪</p>
          <p class="menu-btn"></p>
          <p class="menu-btn">
            <span>view</span>

            <img src="@/assets/images/icon_arrow-wh.svg" alt="" class="arrow" />
          </p>
        </div>
        <img
          src="@/assets/images/top_menu_1-frame.svg"
          class="toppage_menu2-frame"
          alt=""
        />
      </a>
    </section>
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
#menu {
  margin-top: 100px;
  width: 100%;

  @include mq-m {
    margin-top: 20px;
  }
}

.menu-sec {
  width: 100%;
}

.menu-link {
  position: relative;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
}

%menu-img {
  width: 100%;
  height: 600px;
  display: block;
  background-position: center;
  background-size: cover;

  @include mq-m {
    height: 60vh;
  }
}

.menu-link.right {
  @extend %menu-img;

  background-image: url(@/assets/images/top_menu_1.jpg);
  background-attachment: fixed;
}

.menu-link.left {
  @extend %menu-img;
  margin-top: 20px;
  background-image: url(@/assets/images/top_menu_2.png);
}

%menu {
  position: absolute;
  text-align: center;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @include mq-d {
    padding: 40px;
    width: 425px;
    height: 288px;
  }

  @include mq-m {
    width: 67vw;
    height: 45vw;
    padding: 7vw;
  }
}

.menu-right {
  @extend %menu;

  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
}

%menu-frame {
  position: absolute;
  bottom: 0;
  z-index: 60;

  @include mq-m {
    width: 67vw;
    height: 45vw;
  }
}

.toppage_menu1-frame {
  @extend %menu-frame;

  right: 0;
}

.menu-left {
  @extend %menu;
  left: 0;
  bottom: 0;
  background-color: #ae465d;
  color: #eee0b5;
}

.toppage_menu2-frame {
  @extend %menu-frame;
  left: 0;
  bottom: 0;
}

.menu-header {
  @include mq-d {
    font-size: 24px;
  }

  @include mq-m {
    font-size: var(--3xl);
  }
}

.menu-title {
  font-size: var(--4xl);
}

.menu-sub {
  font-size: var(--xl);
}

.menu-btn {
  font-size: var(--xl);
  display: flex;
  align-items: center;
  width: fit-content;
}

.arrow {
  margin-left: 5px;
}
</style>
