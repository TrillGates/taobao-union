module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    /*标题,也就是显示在标签标题，一般动态显示*/
    title: '阳光沙滩-淘宝联盟商城',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '这里是网站描述，对应着SEO里的description '},
      {hid: 'keywords', name: 'keywords', content: '这是关键字,android,java,Nuxt.js'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {
        src: 'https://cdn.sunofbeaches.com/qrcodejs/qrcode.min.js'
      }
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],
  plugins: [
    {
      src: '~plugins/elementui',
      ssr: true
    },
  ],

  modules: [
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy: true,
    prefix: '/union/',
    credentials: true
  },

  proxy: {
    '/union/': {
      target: 'https://api.sunofbeach.net/shop/api/',
      pathRewrite: {
        changeOrigin: true,
        '^/union/': ''
      }
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#c9302c'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

