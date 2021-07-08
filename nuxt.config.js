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
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-porfolio-app-default-rtdb.firebaseio.com'
  }
};
