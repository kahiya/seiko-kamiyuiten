<template>
  <div class="page-block shippori">
    <p>Price</p>

    <div class="menu-wrap">
      <div id="jigeyui" class="menu-description">
        <p class="menu-header">plan</p>
        <p class="menu-title">地毛結い</p>
        <p class="menu-price">１８，０００[税込]〜</p>
        <p class="menu-time">髪結所要時間:1時間</p>
        <p class="menu-note">
          お客様ご自身のお髪を使って 結い上げる日本古来の手法です。
          髪型については色々種類もございますが、お客様の髪の長さによって結い上げ
          可能かが左右されますのでご依頼の際に お尋ねください。
        </p>
      </div>
      <img class="menu-img" src="@/assets/images/main_sp02.jpg" alt="" />
    </div>
    <div class="menu-wrap">
      <img class="menu-img" src="@/assets/images/main_sp02.jpg" alt="" />
      <div id="hankatsura" class="menu-description">
        <p class="menu-header">plan</p>
        <p class="menu-title">半かつら</p>
        <p class="menu-price">１5，０００[税込]〜</p>
        <p class="menu-time">髪結所要時間:20分</p>
        <p class="menu-note">
          生え際の髪の毛のみを生かして 結い上げます。
          映画や時代劇などで女優さんがされる手法と同じやり方で結い上げますので、とても自然な仕上がりになります。
          髪の毛の短い方や、結い上げの負担を少なくされたい方にお勧めです。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.menu-wrap {
  width: 100%;
  display: flex;
  gap: 5%;
  height: clamp(400px, 60vw, 600px);
  margin-bottom: 100px;

  @include mq-m {
    flex-direction: column;
  }
}

.menu-description {
  width: 45%;
  background-color: #fff;
  text-align: center;
  padding: 50px;

  @include mq-m {
    width: 100%;
  }
}

.menu-header {
  font-size: 24px;
  margin-bottom: 20px;

  @include mq-m {
    font-size: size-m(16);
  }
}

.menu-title {
  font-size: 36px;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;

  @include mq-m {
    font-size: size-m(24);
  }
}

.menu-price {
  font-size: clamp(16px, 3vw, 24px);

  @include mq-m {
    font-size: size-m(20);
  }
}

.menu-time {
  font-size: 18px;
  margin-top: 20px;

  @include mq-m {
    font-size: size-m(16);
  }
}

.menu-note {
  font-size: 16px;
  line-height: 1.8rem;
  margin-top: 30px;

  @include mq-m {
    font-size: size-m(20);
  }
}

.menu-img {
  width: 50%;
  object-fit: cover;
}
</style>
