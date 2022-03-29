<template>
  <div class="page-root">
    <section id="contact" class="page-block my-20 shippori fuwa" ref="fuwa">
      <span class="">
        <img
          src="@/assets/images/toppage-title_contact.svg"
          class="section-title"
          alt=""
        />
      </span>
      <div class="contact">
        <img
          src="@/assets/images/flame-top.svg"
          alt=""
          class="flame-img mb-10"
        />

        <span class="contact-header">ご予約方法</span>
        <p class="shippori contact-note">
          下記にEメールもしくはSNSのDMからご連絡ください
        </p>
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdajRuhVw2YpmTLGx1yL6lpRtH5T5G1wxn10HNP8TjrlvH-uQ/formResponse"
          method="POST"
          name="contact"
          class="form-contact"
          target="hidden_iframe"
          onsubmit="submitted=true;"
        >
          <div class="form-row">
            <label for="" class="form-label">お名前</label>
            <input type="text" class="form-input" name="entry.1756106708" />
          </div>
          <div class="form-row">
            <label for="" class="form-label">メールアドレス</label>
            <input type="email" class="form-input" name="entry.1884551195" />
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
          <div class="btn-row">
            <button
              type="submit"
              class="submit-btn"
              value="送信"
              @click="isSubmitted = true"
            >
              送信
            </button>
          </div>
        </form>
        <iframe
          @load="submittedHandler"
          name="hidden_iframe"
          style="display: none"
        ></iframe>
        <table class="contact-info">
          <tr>
            <th>Email</th>
            <td>: kamiyui13seiko@gmail.com</td>
          </tr>
          <tr>
            <th class="instagram info-header">instagram</th>
            <td>
              <a href="https://www.instagram.com/kamiyuiumeko/">
                : @kamiyuiumeko</a
              >
            </td>
          </tr>
          <tr>
            <th class="twitter info-header">twitter</th>
            <td>
              <a href="https://twitter.com/kamiyuiumeko"> : @kamiyuiumeko </a>
            </td>
          </tr>
        </table>
        <img
          src="@/assets/images/flame-bottom.svg"
          alt=""
          class="flame-img mt-10"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      isSubmitted: false,
    };
  },
  mounted() {
    this.observeIntersection('fuwa');
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
        this.$router.push('/thanks');
      }
    },
  },
};
</script>
<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-header {
  @include mq-d {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @include mq-m {
    font-size: clamp(18px, 5vw, 20px);
    margin-bottom: 4vw;
  }
}

.contact-note {
  @include mq-m {
    font-size: clamp(13px, 3vw, 14px);
  }
}

.contact-info {
  @include mq-d {
    font-size: 16px;
    padding: 50px;

    tr > th,
    tr > td {
      padding: 15px 0;
    }

    tr > td {
      padding-left: 10px;

      &::after {
        content: '\f35d';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;

        font-size: 16px;
        margin-left: 5px;
        color: $btn-brown;
        pointer-events: none;
      }
    }
  }

  @include mq-m {
    font-size: clamp(12px, 3vw, 14px);

    tr > th,
    tr > td {
      padding: 10px 0;
    }

    tr > td {
      padding-left: 10px;

      &::after {
        content: '\f35d';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;

        font-size: clamp(12px, 3vw, 14px);
        margin-left: 5px;
        color: $btn-brown;
        pointer-events: none;
      }
    }
  }
}

.info-header {
  display: flex;
  align-items: center;
}

$icon-width: 16px;

.instagram,
.twitter {
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: $icon-width;
    height: $icon-width;
    left: -($icon-width + 5px);
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.instagram {
  &::before {
    background-image: url(@/assets/images/icon_insta.svg);
  }
}

.twitter {
  &::before {
    background-image: url(@/assets/images/icon_tw.svg);
  }
}

.flame-img {
  @include mq-d {
    width: 400px;
  }

  @include mq-m {
    width: 80vw;
  }
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
