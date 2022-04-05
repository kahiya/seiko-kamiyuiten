export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "セイコ髪結店",
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "日本古来の文化「日本髪」の技術と素晴らしさ、そして想いをつなげる結髪師菱田聖子のホームページ。地髪結い、婚礼、作品撮りなどご依頼承ります。",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "og:title",
        property: "og:title",
        content: "セイコ髪結店",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "日本古来の文化「日本髪」の技術と素晴らしさ、そして想いをつなげる結髪師菱田聖子のホームページ。地髪結い、婚礼、作品撮りなどご依頼承ります。",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://seiko-kamiyuiten.com/",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://seiko-kamiyuiten.com/images/ogp-img.png",
      },
      { hid: "og:locale", property: "og:locale", content: "ja_JP" },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "セイコ髪結店",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "@/favicons/favicon.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    "@/assets/scss/style.scss",
  ],
  // 普通のスタイルはここでインポートしてはいけない。変数やmixin等、直接buildされないもののみ読み込む
  // 参考： https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: ["@/assets/scss/vars.scss", "@/assets/scss/mixins.scss"],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/IntersectionMixin.js", "~/plugins/plugin.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "@/components/",
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/style-resources",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-webfontloader"],

  webfontloader: {
    google: {
      families: ["Hina+Mincho:400", "Shippori+Mincho+B1:400"],
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
