<template>
  <div class="" id="contact-form">
    <form
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdajRuhVw2YpmTLGx1yL6lpRtH5T5G1wxn10HNP8TjrlvH-uQ/formResponse"
      method="POST"
      name="contact"
      class="form-contact"
      target="hidden_iframe"
      onsubmit="submitted=true;"
    >
      <div class="form-row">
        <label for="" class="form-label">名前</label>
        <input type="text" class="form-input" name="entry.1756106708" />
      </div>
      <div class="form-row">
        <label for="" class="form-label">メールアドレス</label>
        <input type="email" class="form-input" name="entry.1785850431" />
      </div>
      <div class="form-row">
        <label for="" class="form-label">件名</label>
        <input type="text" class="form-input" name="entry.273031128" />
      </div>
      <div class="form-row">
        <label for="" class="form-label">本文</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="20"
          class="form-textarea"
          name="entry.130272431"
        ></textarea>
      </div>
      <div class="">
        <img src="@/assets/images/recaptcha.jpg" class="recaptcha-img" alt="" />
      </div>
      <div class="form-row">
        <label for="" class="form-label"
          >上に表示されている数字とアルファベットを入力してください
          <span class="needed">※必須</span>
        </label>
        <input
          type="text"
          class="form-input"
          name="entry.1797246440"
          required
        />
      </div>
      <div class="btn-row">
        <input
          type="submit"
          class="nomal-btn"
          value="送信"
          @click="isSubmitted = true"
        />
      </div>
    </form>
    <iframe
      @load="submittedHandler"
      name="hidden_iframe"
      style="display: none"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSubmitted: false,
    };
  },
  methods: {
    submitHandler(e) {
      /*
      // mobile chrome でconfirmは動作しない
      if (confirm('この内容で送信してよろしいですか？')) {
        return true;
      }
      return e.preventDefault();
      */
    },

    submittedHandler(e) {
      if (this.isSubmitted) {
        this.$router.push("/thanks");
      }
    },
  },
};
</script>
<style scoped lang="scss">
#contact-form {
  padding: 50px 0;
}

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

.hidden {
  overflow: hidden;
}

.recaptcha-img {
  margin: auto;
}

.needed {
  color: red;
}
</style>
