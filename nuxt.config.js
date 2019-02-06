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
      { hid: 'description', name: 'description', property: 'og:description', content: '日本の焼き餃子文化を育成し、全世界で愛されるものにする活動をおこなう協会です' },
      { hid: 'og:site_name', property: 'og:site_name', content: '一般社団法人焼き餃子協会' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.gyoza.or.jp' },
      { hid: 'og:title', property: 'og:title', content: '一般社団法人焼き餃子協会' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.gyoza.or.jp/img/ogp.png' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '1917857498322261' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP' }
    ],
    script: [
      { src: '//js.hs-scripts.com/5132004.js', id: 'hs-script-loader', async: true, defer: true },
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
  transition: 'page',
  generate: {
    fallback: true
  },
  modules: [
    '@nuxtjs/markdownit',
    ['@nuxtjs/google-tag-manager', {
      id: process.env.GTM_ID,
      pageTracking: true,
    }],
    ['nuxt-sass-resources-loader', [
      '@/assets/scss/_variables.scss'
    ]],
    ['@nuxtjs/dotenv'],
    '@nuxtjs/pwa',
  ],
  plugins: [
    '@/plugins/vue-smooth-scroll',
  ],
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    xhtmlOut: true,
    breaks: true,
    injected: true,
  }
}
