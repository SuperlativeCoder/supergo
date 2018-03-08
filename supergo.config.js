

module.exports = {
  hubot: {
    env: 'config/dev.env.js',
    path: '"node_modules/.bin:node_modules/hubot/node_modules/.bin:$PATH"',
    name: 'supergo',
    port: 8081,
    hubot_slack_token: '""'
  },
  client: {
    start: {
      port: 8082,
      autoOpenBrowser: false,
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      cssSourceMap: false,
      productionSourceMap: true,
      proxyTable: {

      }
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