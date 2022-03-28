<template>
  <div class="">
    <form action="" method="post" class="form-contact" data-netlify="true">
      <input type="hidden" name="form-name" class="hedden" :value="contact" />

      <div class="form-row">
        <label for="" class="form-label">お名前</label>
        <input type="text" class="form-input" />
      </div>
      <div class="form-row">
        <label for="" class="form-label">メールアドレス</label>
        <input type="email" class="form-input" />
      </div>
      <div class="form-row">
        <label for="" class="form-label">件名</label>
        <input type="text" class="form-input" />
      </div>
      <div class="form-row">
        <label for="" class="form-label">本文</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="20"
          class="form-textarea"
        ></textarea>
      </div>
      <div class="btn-row">
        <input type="submit" class="submit-btn" value="送信" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.form-contact {
  @include mq-d {
    min-width: 500px;
  }

  @include mq-m {
    width: 80vw;
  }
}

.form-contact > * + * {
  margin-top: 20px;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-row {
  color: $btn-brown;
}

.form-input,
.form-textarea {
  border: 1px solid $btn-brown;
  padding: 10px;
  border-radius: 3px;
  width: 100%;
}

.form-input {
  height: 3ch;
}

.btn-row {
  text-align: center;
}

.submit-btn {
  background-color: $btn-brown;
  color: #fff;
  padding: 10px 30px;
  height: 3ch;
  display: inline;
  border-radius: 3px;
}

.hidden {
  overflow: hidden;
}
</style>
