<template>
  <div class="">
    <Header />
    <div id="page_nihongami" class="page-root">
      <div class="page-header about-header shippori">
        <p class="page-title">ABOUT</p>
        <p class="page-subtitle">結髪師について</p>
      </div>
      <Seikosan />
      <FooterBtn />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.about-header {
  background-image: url(@/assets/images/kushi1.jpg);
  width: 100%;
  object-fit: cover;
}
</style>
