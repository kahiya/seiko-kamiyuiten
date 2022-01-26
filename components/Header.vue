<template>
  <div class="">
    <GrobalMenu @close-modal="isMenuVisible = false" v-show="isMenuVisible" />
    <div class="g-nav" v-show="!isMenuVisible">
      <a href="/">
        <img src="@/assets/images/logo-kari.svg" class="logo" alt="" />
      </a>
      <div class="nav">
        <button
          class="menu"
          @click.prevent="isMenuVisible = true"
          v-show="!isMenuVisible"
        >
          <span class="bar_top"></span>
          <span class="bar_mid"></span>
          <span class="bar_bottom"></span>
        </button>

        <!-- <button
          class="menu btn-close"
          @click.prevent="isMenuVisible = false"
          v-show="isMenuVisible"
        >
          <span class="bar_left"></span>
          <span class="bar_right"></span>
        </button> -->
      </div>
    </div>

    <div class="g-nav menu-open" v-show="isMenuVisible">
      <a href="/">
        <img src="@/assets/images/logo-kari.svg" class="logo" alt="" />
      </a>

      <button class="menu btn-close" @click.prevent="isMenuVisible = false">
        <span class="bar_left"></span>
        <span class="bar_right"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false,
    };
  },

  watch: {
    $route(to, from) {
      this.isMenuVisible = false;
    },
  },
};
</script>
<style scoped lang="scss">
.g-nav {
  width: 100%;
  height: 70px;
  //background-color: rgba(255, 255, 255, 0.653);
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 900;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 60px;
  height: 60px;
  padding-left: 20px;
}

.nav {
  width: 50px;
  height: 50px;
  position: relative;
  background-color: #000;
  padding-right: 20px;
}

.menu {
  width: 100%;
  height: 100%;
}

%bar {
  width: 30px;
  height: 2px;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
}

.bar_top,
.bar_mid,
.bar_bottom,
.bar_left,
.bar_right {
  @extend %bar;
}

.bar_top {
  top: 25%;
}

.bar_mid {
  top: 47%;
}

.bar_bottom {
  bottom: 25%;
}

.bar_left {
  top: 30%;
  transform: translate(-50%, 10px) rotate(45deg);
  transition: transform 0.3s;
}

.bar_right {
  bottom: 30%;
  transform: translate(-50%, -8px) rotate(-45deg);
  transition: transform 0.3s;
}

.btn-close {
  width: 50px;
  height: 50px;
  position: relative;
  background-color: #000;
  padding-right: 20px;
}

.menu-open {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  animation-name: fade;
  animation-duration: 0.5s;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
