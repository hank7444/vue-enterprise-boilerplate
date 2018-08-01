console.log('process.env.ENV', process.env.ENV);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.VUE_APP_TITLE', process.env.VUE_APP_TITLE);

const build = require('./build.settings');
const appConfig = require('./src/app.config');

module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  lintOnSave: false,
  configureWebpack: {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: appConfig.title,
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require('./aliases.config').webpack,
    },
    plugins: [
      build.defineJsConstants(),
    ],
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
  },
  // Configure Webpack's dev server.
  // https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md
  devServer: {
    port: 3000,
    ...(process.env.API_BASE_URL
      ? // Proxy API endpoints to the production base URL.
        { proxy: { '/api': { target: process.env.API_BASE_URL } } }
      : // Proxy API endpoints a local mock API.
        { before: require('./tests/mock-api') }),
  },
}
