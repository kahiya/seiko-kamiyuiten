<template>
  <div class="footer-btn">
    <Nuxt-link to="/" class="nomal-btn"
      ><span>トップページに戻る</span></Nuxt-link
    >
    <Nuxt-link to="/gallery" class="brown-btn"
      ><span>ギャラリーを見る</span></Nuxt-link
    >
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.footer-btn {
  display: flex;
  gap: 50px;
  text-align: center;

  @include mq-m {
    flex-direction: column;
  }
}
</style>
