<template>
  <div class="">
    <div class="bg" @click="$emit('close-modal')">
      <div class="menu" @click="$emit('close-modal')">
        <ul class="menu-list">
          <li>
            <NuxtLink to="/service" class="list-item">TOP</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="list-item">ABOUT</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/nihongami" class="list-item">NIHONGAMI</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/bridal" class="list-item">BRIDAL</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/gallery" class="list-item">GALLERY</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenMenu: false,
      isMenuVisible: false,
    };
  },
};
</script>
<style scoped lang="scss">
.menu-list {
  position: absolute;
  z-index: 10;
  width: 100%;
  letter-spacing: 0.1rem;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.653);
  color: #000;
  top: 70px;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-around;
}

.list-item {
  font-size: var(--xl);
  width: 100%;
  text-align: center;
}
</style>
