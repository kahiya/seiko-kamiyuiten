<template>
  <div class="">
    <div class="bg" @click="$emit('close-modal')">
      <div class="menu" @click="$emit('close-modal')">
        <ul class="menu-list">
          <li>
            <a href="/" class="list-item">TOP</a>
          </li>
          <li>
            <a href="/about" class="list-item">ABOUT</a>
          </li>
          <li>
            <a href="/nihongami" class="list-item">NIHONGAMI</a>
          </li>
          <li>
            <a href="/bridal" class="list-item">BRIDAL</a>
          </li>
          <li>
            <a href="/gallery" class="list-item">GALLERY</a>
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
  position: fixed;
  z-index: 10;
  width: 100%;
  letter-spacing: 0.1rem;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
  top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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

.list-item {
  font-size: var(--xl);
  width: 100%;
  text-align: center;
  padding: 5vh;

  &:hover {
    background-color: rgba(128, 128, 128, 0.461);
  }
}
</style>
