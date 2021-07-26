/* eslint-disable */
const config = require('./content/data/config.json');
/* eslin-enable */
const dev =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
export default {
  dev,
  env: {
    strapiBaseUri: process.env.BASE_URL || 'http://localhost:3000',
  },
  target: 'static',
  modern: dev ? false : 'client',
  /*
   ** Headers of the page
   */
  head: {
    title: config.title || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: config.description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/mapOrder.js', '~/plugins/surround.js'],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxt/image'],
  content: {
    nestedProperties: ['author.name'],
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
};
