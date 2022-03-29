<template>
  <div class="page-root">
    <div class="page-block thanks shippori">
      <p class="thanks-header">お問い合わせありがとうございました</p>
      <p class="thanks-note">
        内容を確認後、数日中に返信いたしますので暫くお待ちいただきますようお願い申し上げます
      </p>

      <Nuxt-link to="/" class="nomal-btn"
        ><span>トップページに戻る</span></Nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.thanks {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  height: 100vh;

  @include mq-d {
    margin-top: 200px;
  }

  @include mq-m {
    margin-top: 30vw;
  }
}

.thanks-header {
  @include mq-d {
    font-size: 34px;
  }

  @include mq-m {
    font-size: 16px;
  }
}

.thanks-note {
  @include mq-m {
    font-size: 13px;
    width: 70vw;
  }
}
</style>
