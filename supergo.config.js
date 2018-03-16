var path = require('path')
module.exports = {
  hubot: {
    path: '"node_modules/.bin:node_modules/hubot/node_modules/.bin:$PATH"',
    name: 'supergo',
    port: 8081,
    hubot_slack_token: '"encrypt:aa3eced3286639c44b0e01a781f8c946cb5a9a4be2522ed6a6c8f4e0f6d0ff5a2c2e4da846316fc8b10e8fc5a87a1bbd"',
    hubot_shellcmd="bash/handler"
  },
  client: {
    dev: {
      env: require('./config/env/dev.env.js'),
      port: 8082,
      cssSourceMap: true,
      productionSourceMap: true,
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      proxy: require('./config/proxy/dev.proxy')
    },
    start: {
      env: require('./config/env/prod.env.js'),
      port: 8082,
      cssSourceMap: false,
      productionSourceMap: false,
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      proxy: require('./config/proxy/prod.proxy')
    },
    test: {
      env: require('./config/env/test.env.js'),
      port: 8082,
      cssSourceMap: true,
      productionSourceMap: true,
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      proxy: require('./config/proxy/test.proxy')
    },
    common: {
      vueLoader: {},
      css: {
        extract: true,
        loaderOptions: {},
        modules: false
      }
    },
    build: {
      index: path.resolve(__dirname, '../dist/index.html'),
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsSubDirectory: 'static',
      assetsPublicPath: '/manage/',
      productionSourceMap: false,
      cssSourceMap: false,
      productionGzip: true,
      productionGzipExtensions: ['js', 'css']
    }
  }
}