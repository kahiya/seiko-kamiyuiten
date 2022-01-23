<template>
  <div>
    <div class="layout">
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss">
:root {
  //font-size
  --sm: clamp(0.5rem, 2vw, 0.875rem);
  --base: clamp(12px, 2.5vw, 1rem);
  --lg: clamp(14px, 2.8vw, 1.125rem);
  --xl: clamp(16px, 3vw, 1.25rem);
  --2xl: clamp(18px, 4vw, 1.5rem);
  --3xl: clamp(20px, 4.5vw, 1.875rem);
  --4xl: clamp(24px, 5vw, 2.25rem);
  --8xl: clamp(40px, 8vw, 6rem);
}

.layout {
  //XXX: これがないと、ヘッダーのposition: fixedが効かない。原因不明。
  overflow: hidden;
}

.mobile-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 400;
}
</style>
