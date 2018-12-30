module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '一般社団法人焼き餃子協会',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: '焼き餃子を日本の文化として世界に発信する。日本の様々な餃子を、多くの人に知ってもらう。' },
      { property: 'og:image', content: 'http://www.gyoza.or.jp/img/ogp.png' },
    ],
    script: [
      { src: '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      { src: '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js' },
//      { src: '/assets/js/script.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP' }
    ],
  },
  css: [
    '@/assets/scss/_reset.scss',
    '@/assets/scss/_utility.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    fallback: true
  },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-131226277-1'
    }],
    ['nuxt-sass-resources-loader', [
      '@/assets/scss/_variables.scss'
    ]],
    ['@nuxtjs/dotenv']
  ],
  plugins: [
    '@/plugins/vue-scrollto',
  ],
}
