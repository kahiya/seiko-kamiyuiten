<template>
  <div class="">
    <Header />
    <div id="page-gallery" class="page-root">
      <div class="page-header gallery-header shippori">
        <p class="page-title">GALLERY</p>
        <p class="page-subtitle">おしごと</p>
      </div>
      <GalleryImages />
      <Nuxt-link to="/" class="nomal-btn"
        ><span>トップページに戻る</span></Nuxt-link
      >
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.gallery-header {
  background-image: url(@/assets/images/gallery-header.jpg);
}
</style>
