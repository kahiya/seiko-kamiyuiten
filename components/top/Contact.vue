<template>
  <div class="page-root">
    <section id="contact" class="page-block my-20 shippori">
      <span class="">
        <img
          src="@/assets/images/toppage-title_contact.svg"
          class="seciton-title"
          alt=""
        />
      </span>
      <div class="contact">
        <span class="contact-header">ご予約方法</span>
        <p class="shippori">下記にEメールもしくはSNSのDMからご連絡ください</p>
        <img
          src="@/assets/images/flame-top.svg"
          alt=""
          class="flame-img my-10"
        />
        <table class="contact-info">
          <tr>
            <th>Email</th>
            <td>: kamiyui13seiko@gmail.com</td>
          </tr>
          <tr>
            <th class="instagram info-header">instagram</th>
            <td>
              <a href="https://www.instagram.com/kamiyuiumeko/"> : @shoryu</a>
            </td>
          </tr>
          <tr>
            <th class="twitter info-header">twitter</th>
            <td>
              <a href="https://twitter.com/kamiyuiumeko"> : @kamiyuimeko </a>
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
export default {};
</script>
<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-header {
  font-size: 24px;
  margin-bottom: 20px;
}

.contact-info {
  font-size: 16px;
  padding: 50px;

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
  width: 400px;
}
</style>
