<template>
  <div class="page-root">
    <article id="gallery" class="page-block mt-20">
      <span class="">
        <img
          src="@/assets/images/toppage-title_gallery.svg"
          class="seciton-title"
          alt=""
        />
      </span>
      <div class="gallery">
        <article class="gallery-item">
          <a href="/public/gallery.html" class="bgDU">
            <img src="@/assets/images/02.jpg" alt="" />
          </a>
        </article>
        <article class="gallery-item">
          <a href="/public/gallery.html" class="bgDU">
            <img src="@/assets/images/01.jpg" alt="" />
          </a>
        </article>
        <article class="gallery-item">
          <a href="/public/gallery.html" class="bgDU">
            <img src="@/assets/images/02.jpg" alt="" />
          </a>
        </article>
        <article class="gallery-item">
          <a href="/public/gallery.html" class="bgDU">
            <img src="@/assets/images/01.jpg" alt="" />
          </a>
        </article>
        <article class="gallery-item">
          <a href="/public/gallery.html" class="bgDU">
            <img src="@/assets/images/02.jpg" alt="" />
          </a>
        </article>
        <article class="gallery-item">
          <a href="/public/gallery.html" class="bgDU">
            <img src="@/assets/images/01.jpg" alt="" />
          </a>
        </article>
      </div>
      <div class="btn-block">
        <a href="/gallery.html" class="nomal-btn shippori">view more</a>
      </div>

      <span class="">
        <img src="@/assets/images/toppage-title_contact.svg" class="" alt="" />
      </span>
      <section id="contact" class="">
        <img
          src="@/assets/images/top_menu_1.jpg"
          class="toppage-contact-img"
          alt=""
        />
        <div class="contact-area">
          <h2 class="toppage-contact-header">ご予約方法</h2>
          <p>下記にEメールもしくはDMでご連絡ください</p>
          <!--/contact-area-->
          <p class="contact-sns">
            <span>Email :</span>
            <span>*****@gmail.com</span>
          </p>
          <p class="contact-sns">
            <img src="@/assets/images/icon_insta.svg" class="icon-sns" alt="" />
            <span> instagram : </span>
            <span>@shoryu</span>
          </p>
          <p class="contact-sns">
            <img src="@/assets/images/icon_tw.svg" class="icon-sns" alt="" />
            <span> twitter : </span>
            <span>@kamiyuimeko</span>
          </p>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.gallery-item {
  @include mq-d {
    width: clamp(200px, 31vw, 310px);
  }

  @include mq-m {
    width: 49%;
  }

  margin-bottom: 10px;
}
</style>
