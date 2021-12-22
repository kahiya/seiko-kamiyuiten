<template>
  <div id="seikosan" class="page-root">
    <div class="page-header">
      <img src="@/assets/images/main01.jpg" class="page-header-img" alt="" />
    </div>
    <div class="page-block shippori">
      <div class="name-block">
        <div class="title">結髪師</div>
        <p class="name">聖子</p>
        <p class="name-en">seiko</p>
      </div>
      <img src="@/assets/images/main03.jpg" class="plofile-img" alt="" />
      <p class="description">
        プロフィール：<br />
        京都祇園町の結髪師へ弟子入り。祇園町、宮川町、先斗町の舞妓さんをかかえる美容室で住み込み生活をしながらおよそ6年技術を磨く。
        その後、ブライダルを軸とするホテルの一般ブライダル美容室へ入室。京都ならではの日本髪、主に地髪での結い上げを担当する。しかし、打掛に洋髪が昨今の流行であるため、物足りなさを感じ、日本髪をさらに追求すべく時代劇の道へ。
        鬘業界の門戸をたたき、舞台、朝ドラ、映画の結髪師となる。
        現在は仙台・京都を拠点にフリーとして活躍中。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.name-block {
  text-align: center;
  padding: 50px 0;
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

.plofile-img {
  margin: auto;
  width: clamp(300px, 60vw, 600px);
  height: auto;
  object-fit: cover;
}

.description {
  width: clamp(300px, 50vw, 600px);
  margin: auto;
  padding: 50px 0;
  line-height: 1.7;
  padding-bottom: 200px;
}
</style>
