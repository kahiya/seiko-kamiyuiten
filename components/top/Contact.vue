<template>
  <div class="page-root">
    <section id="contact" class="page-block shippori fuwa" ref="fuwa">
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

        <span class="contact-header">お問い合わせ</span>
        <p class="shippori contact-note">
          下記フォームに入力後、送信ボタンを押してください。
        </p>
        <Form />
        <p class="shippori contact-note">◆SNSのDMからも受け付けております◆</p>
        <table class="contact-info">
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
    this.observeIntersection("fuwa");
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
#contact {
  // margin-top: 100px;
  width: 100%;
}

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
    margin-top: 30px;

    tr > th,
    tr > td {
      padding: 15px 0;
    }

    tr > td {
      padding-left: 10px;

      &::after {
        content: "\f35d";
        font-family: "Font Awesome 5 Free";
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
        content: "\f35d";
        font-family: "Font Awesome 5 Free";
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
    content: "";
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
</style>
