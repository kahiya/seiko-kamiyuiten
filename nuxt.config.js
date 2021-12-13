export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'seiko-kamiyuiten',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/scss/style.scss',
  ],
  // 普通のスタイルはここでインポートしてはいけない。変数やmixin等、直接buildされないもののみ読み込む
  // 参考： https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: ['@/assets/scss/vars.scss', '@/assets/scss/mixins.scss'],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '@/components/',
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-webfontloader'],

  webfontloader: {
    google: {
      families: ['Hina+Mincho:400', 'Shippori+Mincho+B1:400'],
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
