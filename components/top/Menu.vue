<template>
  <div id="menu" class="page-root">
    <section class="page-block">
      <img
        src="@/assets/images/toppage-title_menu.svg"
        class="seciton-title"
        alt=""
      />

      <a href="/public/menu1.html" class="menu-link right">
        <div class="menu-right">
          <p class="-header">Menu</p>
          <p class="">普段の装い</p>
          <p class="">日常を愉しむ日本髪</p>
          <p class="">view</p>
        </div>
        <img
          src="@/assets/images/top_menu_1-frame.svg"
          class="toppage_menu1-frame"
          alt=""
        />
      </a>
      <a href="/public/menu2.html" class="menu-link">
        <img src="@/assets/images/top_menu_2.png" class="menu-img" alt="" />
        <div class="menu-left">
          <p class="">Menu</p>
          <p class="">普段の装い</p>
          <p class="">日常を愉しむ日本髪</p>
          <p class="">view</p>
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
export default {};
</script>
<style scoped lang="scss">
#menu {
  margin-top: 100px;
}

.seciton-title {
  margin: auto;
  width: 300px;
  margin-bottom: 20px;
}

.menu-link {
  position: relative;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
}

.menu-link.right {
  width: 100%;
  height: 600px;
  display: block;
  background-image: url(@/assets/images/top_menu_1.jpg);
}

%menu {
  position: absolute;
  z-index: 50;
}

.menu-right {
  @extend %menu;

  right: 0;
  bottom: 0;
  width: 425px;
  height: 288px;
  background-color: rgba(255, 255, 255, 0.681);
}

.toppage_menu1-frame {
  @extend %menu;

  right: 0;
  bottom: 0;
}
</style>
