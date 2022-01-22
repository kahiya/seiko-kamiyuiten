<template>
  <div id="page_nihongami" class="page-root">
    <div class="page-header nihongami-header shippori">
      <p class="page-title">NIHONGAMI</p>
      <p class="page-subtitle">日常の装い</p>
    </div>
    <Intro1 />
    <MenuJigami />
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.nihongami-header {
  background-image: url(@/assets/images/main02.jpg);
  width: 100%;
  object-fit: cover;
}
</style>
