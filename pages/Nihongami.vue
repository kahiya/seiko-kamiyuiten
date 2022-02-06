<template>
  <div class="">
    <Header />

    <div id="page_nihongami" class="page-root">
      <div class="page-header nihongami-header shippori">
        <p class="page-title">NIHONGAMI</p>
        <p class="page-subtitle">日常の装い</p>
      </div>
      <Intro1 />
      <img class="section-title" src="@/assets/images/title-price.svg" alt="" />

      <MenuJigami />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.nihongami-header {
  background-image: url(@/assets/images/pageheader-nihongami.jpg);
  width: 100%;
}
</style>
