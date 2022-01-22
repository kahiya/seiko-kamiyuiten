<template>
  <div class="page-block shippori">
    <p>Price</p>

    <div class="menu-wrap">
      <div id="takashimada" class="menu-description">
        <p class="menu-header">plan</p>
        <p class="menu-title">文金高島田</p>
        <p class="menu-price">４８，０００[税込]</p>
        <p class="menu-time">髪結所要時間:1.5時間</p>
        <p class="menu-note">
          高島田はかつて上流武家の女性が正式な儀式の場で結い上げる髪型でした。
          髷の根を高くし、優雅で上品に仕上げる髪型は、現在「文金高島田」として花嫁の髪型として定着しています
        </p>
        <div class="option">
          <p class="menu-option-title">新日本髪</p>
          <p class="menu-option-price">２８，０００〜</p>
        </div>
        <div class="option">
          <p class="menu-option-title">
            花嫁用かんざし一式(角隠し/綿帽子)レンタル
          </p>
          <p class="menu-option-price">１４,５００円[税込]</p>
        </div>
      </div>
      <img class="menu-img" src="@/assets/images/main_sp02.jpg" alt="" />
    </div>
    <div class="menu-wrap">
      <img class="menu-img" src="@/assets/images/main_sp02.jpg" alt="" />
      <div id="kitsuke" class="menu-description">
        <p class="menu-header">plan</p>
        <p class="menu-title">黒引き振袖</p>
        <p class="menu-price">４８，０００[税込]〜</p>
        <p class="menu-time">着付け所用時間:約30分</p>
        <p class="menu-note">
          昭和初期までは民間の結婚式で一般的だった黒引き振袖。
          日本では黒はもっとも格式の高い色とされ、慶事に用いられていたのです。幾重にも重ねられた黒色には嫁いだあとに「他の色には染まらない」という意味も込められています。
          引き振り袖のシルエットはすらっとして美しく、日本ならではの美意識が顕れます。
        </p>
      </div>
    </div>
    <div class="menu-wrap">
      <img class="menu-img" src="@/assets/images/main_sp02.jpg" alt="" />
      <div id="hankatsura" class="menu-description">
        <p class="menu-header">plan</p>
        <p class="menu-title">白無垢</p>
        <p class="menu-price">４８，０００[税込]〜</p>
        <p class="menu-time">着付け所用時間:約30分</p>
        <p class="menu-note">
          白無垢の白い色は神聖な太陽の光に例えられ、室町の時代から婚礼の衣装として使われるようになりました。
          白無垢を着ることで新婦の身を清め、清純な姿で花婿と一緒になることを意味します。
          白一色でまとめられた花嫁姿は荘厳で美しく、身にまとうことで凛とした気持ちにさせてくれます。
        </p>
      </div>
    </div>
    <div class="menu-wrap">
      <img class="menu-img" src="@/assets/images/main_sp02.jpg" alt="" />
      <div id="hankatsura" class="menu-description">
        <p class="menu-header">plan</p>
        <p class="menu-title">色打掛</p>
        <p class="menu-price">４８，０００[税込]〜</p>
        <p class="menu-time">着付け所用時間:約30分</p>

        <p class="menu-note">
          打掛は元は武家の婚礼衣装でした。鮮やかでお目出度い意匠が散りばめられた豪華な衣装です。
          花嫁の幸せを願った豪華絢爛な縁起物の柄が目を引きます。
          主にお色直しで使われます。
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
