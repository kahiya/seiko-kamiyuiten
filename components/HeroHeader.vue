<template>
  <div class="">
    <img src="@/assets/images/hero-img.jpg" alt="" class="hero-img" />
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.hero-img {
  width: 100%;

  @include mq-m {
    height: 500px;
    object-fit: cover;
  }
}
</style>
