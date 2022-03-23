<template>
  <div class="">
    <!-- 導入部分のアニメーション -->
    <div id="splash">
      <div id="splash-logo">
        <p>
          <span class="slide-in slideAnimeLeftRight"
            ><span
              class="slide-in_inner slideAnimeRightLeft topppage-intro-text"
              >traditional japanese hairstyle</span
            ></span
          >
        </p>

        <div class="splashbg1"></div>
        <div class="splashbg2"></div>
        <!---画面遷移用-->
        <div id="wrapper">
          <header id="header">
            <div class="header-area">
              <a href="index.html" class="header-logo">
                <img src="@/assets/images/logo.svg" alt="" />
              </a>
            </div>
            <div class="scrolldown2">
              <span>Scroll</span>
            </div>
            <div id="header-img">
              <img
                src="@/assets/images/hero-title.svg"
                class="hero-title-logo fadeInTriggerNomal"
                alt=""
              />
            </div>
          </header>

          <div class="openbtn"><span></span><span></span><span></span></div>
          <nav class="g-nav">
            <div class="g-nav-list">
              <ul>
                <li>
                  <a href="#"
                    ><span class="blurTrigger">Seiko Kamiyuiten</span></a
                  >
                </li>
                <li class="blurTrigger"><a href="index.html">Top</a></li>
                <li class="blurTrigger"><a href="/about.html">About</a></li>
                <li class="blurTrigger"><a href="/general.html">General</a></li>
                <li class="blurTrigger"><a href="/wedding.html">Wedding</a></li>
                <li class="blurTrigger">
                  <a href="/gallery.html">Gallery </a>
                </li>
              </ul>
            </div>
          </nav>

          <main id="container" class="font-shippori">
            <div class="page-body">
              <article id="top_about" class="inner zoomOutTrigger">
                <div class="top_about-img fadeInTriggerNomal"></div>
                <div class="top_about-area fadeInTriggerNomal">
                  <h2 class="top_about-header">日本髪への想い</h2>
                  <p class="top_about-note">
                    黒い髪は「女の命」と言われ、<br />古くから日本美人の象徴でもありました<br />著しく忙しい生活を送る現代の私達も、<br />
                    むかし皆が結っていたように結い上げて、<br />古き時代に想いを<br />馳せるのも良いのではないでしょうか<br />そこにはきっと、日本の美意識や<br />
                    日常の慎ましやかな生活が見えてくるでしょう。<br />日本髪がもっと身近に。<br />古より続く女性の美をお届けします。
                  </p>
                  <div class="top_about-btn">
                    <a href="/gallery.html" class="btn04 bordertop"
                      ><span>結髪師のご紹介</span></a
                    >
                  </div>
                </div>
                <!--/top_about-->
              </article>

              <section id="menu">
                <span class="slide-in leftAnime toppage-title-block">
                  <img
                    src="@/assets/images/toppage-title_menu.svg"
                    class="toppage-title slide-in_inner leftAnimeInner fadeInTriggerNomal"
                    alt=""
                  />
                </span>

                <a href="/public/menu1.html" class="toppage_menu">
                  <div class="fadeInTriggerNomal toppage_menu-wrapper">
                    <img
                      src="@/assets/images/top_menu_1.jpg"
                      class="toppage_menu-img"
                      alt=""
                    />
                    <div class="toppage_menu-title-block menu-right">
                      <p class="toppage_menu-title-header">Menu</p>
                      <p class="toppage_menu-title">普段の装い</p>
                      <p class="toppage_menu-title-note">日常を愉しむ日本髪</p>
                      <p class="toppage_menu-title-view fadeInTriggerNomal">
                        view
                      </p>
                    </div>
                    <img
                      src="@/assets/images/top_menu_1-frame.svg"
                      class="toppage_menu1-frame"
                      alt=""
                    />
                  </div>
                </a>
                <a href="/public/menu2.html" class="toppage_menu">
                  <div class="fadeInTriggerNomal toppage_menu-wrapper">
                    <img
                      src="@/assets/images/top_menu_2.png"
                      class="toppage_menu-img"
                      alt=""
                    />
                    <div class="toppage_menu-title-block menu-left">
                      <p class="toppage_menu-title-header">Menu</p>
                      <p class="toppage_menu-title">普段の装い</p>
                      <p class="toppage_menu-title-note">日常を愉しむ日本髪</p>
                      <p class="toppage_menu-title-view fadeInTriggerNomal">
                        view
                      </p>
                    </div>
                    <img
                      src="@/assets/images/top_menu_1-frame.svg"
                      class="toppage_menu2-frame"
                      alt=""
                    />
                  </div>
                </a>
              </section>

              <article id="blog" class="inner">
                <span class="slide-in leftAnime toppage-title-block">
                  <img
                    src="@/assets/images/toppage-title_gallery.svg"
                    class="toppage-title slide-in_inner leftAnimeInner fadeInTriggerNomal"
                    alt=""
                  />
                </span>
                <div class="blog-area">
                  <article class="fadeInTriggerNomal">
                    <a href="/public/gallery.html" class="bgDU">
                      <figure>
                        <img src="@/assets/images/01.jpg" alt="" />
                      </figure>
                    </a>
                  </article>
                  <div class="blog-block">
                    <article class="fadeInTriggerNomal">
                      <a href="/public/gallery.html" class="bgDU">
                        <figure>
                          <img src="@/assets/images/02.jpg" alt="" />
                        </figure>
                      </a>
                    </article>
                    <article class="fadeInTriggerNomal">
                      <a href="/public/gallery.html" class="bgDU">
                        <figure>
                          <img src="@/assets/images/01.jpg" alt="" />
                        </figure>
                      </a>
                    </article>
                    <article class="fadeInTriggerNomal">
                      <a href="/public/gallery.html" class="bgDU">
                        <figure>
                          <img src="@/assets/images/02.jpg" alt="" />
                        </figure>
                      </a>
                    </article>
                    <article class="fadeInTriggerNomal">
                      <a href="/public/gallery.html" class="bgDU">
                        <figure>
                          <img src="@/assets/images/01.jpg" alt="" />
                        </figure>
                      </a>
                    </article>
                    <article class="fadeInTriggerNomal">
                      <a href="/public/gallery.html" class="bgDU">
                        <figure>
                          <img src="@/assets/images/02.jpg" alt="" />
                        </figure>
                      </a>
                    </article>
                    <article class="fadeInTriggerNomal">
                      <a href="/public/gallery.html" class="bgDU">
                        <figure>
                          <img src="@/assets/images/01.jpg" alt="" />
                        </figure>
                      </a>
                    </article>
                  </div>
                </div>
                <div class="btn-block fadeInTriggerNomal">
                  <a href="/gallery.html" class="btn04 bordertop"
                    >写真一覧を見る</a
                  >
                </div>

                <span class="slide-in leftAnime toppage-title-block">
                  <img
                    src="@/assets/images/toppage-title_contact.svg"
                    class="toppage-title slide-in_inner leftAnimeInner fadeInTriggerNomal"
                    alt=""
                  />
                </span>
                <section id="contact" class="fadeInTriggerNomal">
                  <img
                    src="@/assets/images/top_menu_1.jpg"
                    class="toppage-contact-img"
                    alt=""
                  />
                  <div class="contact-area fadeInTriggerNomal">
                    <h2 class="toppage-contact-header">ご予約方法</h2>
                    <p class="contact-note">
                      下記にEメールもしくはDMでご連絡ください
                    </p>
                    <!--/contact-area-->
                    <p class="contact-sns">
                      <span>Email :</span>
                      <span>*****@gmail.com</span>
                    </p>
                    <p class="contact-sns">
                      <img
                        src="@/assets/images/icon_insta.svg"
                        class="icon-sns"
                        alt=""
                      />
                      <span> instagram : </span>
                      <span>@kamiyuimeko</span>
                    </p>
                    <p class="contact-sns">
                      <img
                        src="@/assets/images/icon_tw.svg"
                        class="icon-sns"
                        alt=""
                      />
                      <span> twitter : </span>
                      <span>@kamiyuimeko</span>
                    </p>
                  </div>
                </section>
              </article>
              <!--/blog-body-->
            </div>
            <!--/container-->
          </main>
        </div>
      </div>
    </div>
    <!--/splash-->
  </div>
</template>

<script>
export default {};
</script>
