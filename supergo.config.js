module.exports = {
  hubot: {
    path: '"node_modules/.bin:node_modules/hubot/node_modules/.bin:$PATH"',
    name: 'supergo',
    port: 8081,
    hubot_slack_token: '"encrypt:aa3eced3286639c44b0e01a781f8c946cb5a9a4be2522ed6a6c8f4e0f6d0ff5a2c2e4da846316fc8b10e8fc5a87a1bbd"'
  },
  client: {
    dev: {
      env: 'config/dev.env.js'
    },
    start: {
      env: 'config/prod.env.js'
    },
    test: {
      env: 'config/test.env.js'
    },
    build: {
      index: '"dist/index.html"',
      assetsRoot: '"dist"',
      assetsSubDirectory: 'static',
      assetsPublicPath: '/manage/',
      productionSourceMap: false,
      cssSourceMap: false,
      productionGzip: true,
      productionGzipExtensions: ['js', 'css'],
      bundleAnalyzerReport: process.env.npm_config_report
    }
  }
}