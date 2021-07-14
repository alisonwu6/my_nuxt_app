const pkg = require('./package');
const bodyParser = require('body-parser');

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Frontend Candidate Wu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog of a Frontend developer in Taiwan' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fa924f', duration: 5000, height: '4px' },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },
  /*
   ** Global CSS
   */
  css: [
    '~assets/styles/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-porfolio-app-default-rtdb.firebaseio.com',
    credentials: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  env: {
    //   baseUrl: process.env.BASE_URL || 'https://nuxt-porfolio-app-default-rtdb.firebaseio.com'
    fbAPIKey: 'AIzaSyD9ELsal8bh419_ZWhgijPKY78nExAky4Y',
  },
  // router: {
  //   middleware: 'log'
  // }
  serverMiddleware: [
    bodyParser.json(),
    '~/api',
  ],
};
