import path from "path";
/* eslint-disable */
const glob = require('glob');
const config = require("./content/data/config.json")
/* eslin-enable */
// const dynamicRoutes = getDynamicPaths({
//   '/blog': 'content/blog-posts/*.md',
//  });

export default {
  env: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:3000',
  },
  
  mode: 'universal',
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
        content: config.description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],

  styleResources: {
    scss: ['./assets/scss/variables.scss'],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
    /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['./assets/scss/variables.scss'],
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content'],
  content: {
    nestedProperties: ['author.name'],
  },
  /*
   ** Build configuration
   */
  build: {
    // /*
    //  ** Using frontmatter-markdown-loader here to parse md files
    //  */
    // extend(config, ctx) {  
    //   config.module.rules.push(
    //   {
    //       test: /\.md$/,
    //       loader: "frontmatter-markdown-loader",
    //       include: path.resolve(__dirname, "content/blog-posts")
    //   })
    // }    
  },
  // generate: {
  //   routes: dynamicRoutes
  // }
}
/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */

/* referenced https://github.com/jake-101/bael-template */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url];
      const routes = glob
        .sync(filepathGlob)
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
      return routes
    })
  );
}
