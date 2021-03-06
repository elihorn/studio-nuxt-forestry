module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'prettier', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-sequences': 'off',
    'no-undef': 'off',
    'no-v-html': 'off',
  },
};
