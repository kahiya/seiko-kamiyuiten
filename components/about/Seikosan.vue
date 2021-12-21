<template>
  <div id="seikosan" class="page-root">
    <div class="page-header">
      <img src="@/assets/images/main01.jpg" class="page-header-img" alt="" />
    </div>
    <div class="page-block hina">
      <div class="name-block">
        <div class="title">結髪師</div>
        <p class="name">聖子</p>
        <p class="name-en">seiko</p>
      </div>
      <img src="@/assets/images/main03.jpg" alt="" />
      <p class="description">ダミーテキスト</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.page-header {
  width: 100%;
  height: 40vh;
  object-fit: cover;
  overflow: hidden;
}

.name-block {
  text-align: center;
  padding: 30px 0;
}

.title {
  font-size: 24px;
}

.name {
  font-size: 36px;
}

.name-en {
  font-size: 14px;
}

.description {
  width: clamp(300px, 50vw, 600px);
  margin: auto;
  padding: 50px 0;
}
</style>
