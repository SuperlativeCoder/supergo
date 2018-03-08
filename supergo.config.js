module.exports = {
  hubot: {
    env: 'config/dev.env.js',
    path: '"node_modules/.bin:node_modules/hubot/node_modules/.bin:$PATH"',
    name: 'supergo',
    port: 8081,
    hubot_slack_token: '""'
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