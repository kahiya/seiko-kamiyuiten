<template>
  <div class="thanks">
    <p class="thanks-header">お問い合わせありがとうございました</p>
    <p class="thanks-note">
      内容を確認後、数日中に返信いたしますので暫くお待ちいただきますようお願い申し上げます
    </p>

    <Nuxt-link to="/" class="nomal-btn"
      ><span>トップページに戻る</span></Nuxt-link
    >
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
}

.thanks-header {
  font-size: 34px;
}
</style>
