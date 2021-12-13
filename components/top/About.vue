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
          むかし皆が結っていたように結い上げて、<br />古き時代に想いを<br />馳せるのも良いのではないでしょうか<br />そこにはきっと、日本の美意識や<br />
          日常の慎ましやかな生活が見えてくるでしょう。<br />日本髪がもっと身近に。<br />古より続く女性の美をお届けします。
        </p>
        <div class="text-right">
          <a href="/gallery.html" class="link-btn hina"
            ><span>結髪師のご紹介</span></a
          >
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.about-article {
  display: flex;
  justify-content: space-between;
}

.about-img {
  width: 50%;
  height: 400px;

  img {
    object-fit: cover;
  }
}

.about-area {
  width: 40%;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about-header {
  font-size: var(--2xl);
    letter-spacing: 0.3rem;
}

.link-btn {
  border: 1px solid #000;
  font-size: var(--xl);
  padding: 20px 10px;
  letter-spacing: 0.3rem;
  transition: 0.3s;

  &:hover {
    background-color: #000;
    color: #fff;
  }
}
</style>
