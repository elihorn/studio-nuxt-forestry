/* eslint-disable */
import path from 'path';
const glob = require('glob');
const config = require('./content/data/config.json');
const routes = require('./static/routes.json');
const dynamicRoutes = getDynamicPaths({
  '/works': 'content/works/*.md',
  '/projects': 'content/projects/*.md',
});
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
    routes: dynamicRoutes,
  },
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
    '~/plugins/onLoad.client.js',
    '~/plugins/vueTouch.js',
  ],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/pwa'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxt/image'],
  content: {
    nestedProperties: ['works.slug.id'],
    nestedProperties: ['projects.slug.id'],
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
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url];
      const routes = glob
        .sync(filepathGlob)
        .map((filepath) => `${url}/${path.basename(filepath, '.md')}`);
      return routes;
    })
  );
}
