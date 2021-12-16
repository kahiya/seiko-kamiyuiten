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

        <table class="contact-info">
          <tr>
            <th>Email</th>
            <td>: kamiyui13seiko@gmail.com</td>
          </tr>
          <tr>
            <th class="instagram info-header">instagram</th>
            <td>: @shoryu</td>
          </tr>
          <tr>
            <th class="twitter info-header">twitter</th>
            <td>: @kamiyuimeko</td>
          </tr>
        </table>
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
  font-size: 20px;
  margin-top: 30px;

  tr > th,
  tr > td {
    padding: 10px 0;
  }

  tr > td {
    padding-left: 10px;
  }
}

.info-header {
  display: flex;
  align-items: center;
}

$icon-width: 20px;

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
</style>
