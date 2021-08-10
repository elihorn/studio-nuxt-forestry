/* eslint-disable */
const config = require('./content/data/config.json');
const routes = require('./static/routes.json');
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
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content');
      const works = await $content('works').only(['path', 'media']).fetch();
      const workMedia = [];
      works.forEach((work) => {
        if (work.media?.length > 1) {
          work.media.slice(1).forEach((e, i) => {
            workMedia.push(work.path + '/' + (i + 1));
          });
        }
      });
      return workMedia;
    },
  },
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
  plugins: [
    '~/plugins/mapOrder.js',
    '~/plugins/surround.js',
    // '~/plugins/animateOnScroll.client.js',
    '~/plugins/customCursor.client.js',
  ],

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
    nestedProperties: ['works.slug.media'],
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
