<template>
  <div id="top_about" class="page-root">
    <article class="page-block about-article">
      <img
        src="@/assets/images/blog_04.jpg"
        class="about-img debug-box"
        alt=""
      />

      <div class="about-area debug-box">
        <h2 class="about-header hina">日本髪への思い</h2>
        <p class="about-note shippori">
          黒い髪は「女の命」と言われ、<br />古くから日本美人の象徴でもありました<br />著しく忙しい生活を送る現代の私達も、<br />
          むかし皆が結っていたように結い上げて、古き時代に<br />想いを馳せるのも良いのではないでしょうか<br />そこにはきっと、日本の美意識や<br />
          日常の慎ましやかな生活が見えてくるでしょう。<br />日本髪がもっと身近に。<br />古より続く女性の美をお届けします。
        </p>
        <div class="text-right">
          <a href="/gallery.html" class="nomal-btn-vr hina pc"
            ><span>結髪師のご紹介</span></a
          >
        </div>
      </div>
      <a href="/gallery.html" class="mobile-btn nomal-btn hina mobile"
        ><span>結髪師のご紹介</span></a
      >
    </article>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.about-article {
  @apply mt-16;

  display: flex;
  justify-content: space-between;

  @include mq-m {
    flex-direction: column;
    align-items: center;
  }
}

.about-img {
  width: 45%;
  height: 400px;

  img {
    object-fit: cover;
  }

  @include mq-m {
    width: 90%;
    order: 3;
  }
}

.about-area {
  width: 45%;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include mq-m {
    order: 1;
    width: 80%;
    margin-bottom: 30px;
  }
}

.about-header {
  font-size: var(--2xl);
  letter-spacing: 0.3rem;
}

.about-note {
  @include mq-d {
    font-size: 18px;
    line-height: 1.8;
    padding-top: 10px;
  }

  @include mq-m {
    font-size: clamp(14px, 3.5vw, 16px);
    line-height: 1.7;
    padding-top: 3vw;
  }
}

.mobile-btn {
  order: 2;
  margin-bottom: 30px;
}
</style>
