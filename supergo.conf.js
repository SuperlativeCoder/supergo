module.exports = {
  hubot: {
    path: '"node_modules/.bin:node_modules/hubot/node_modules/.bin:$PATH"',
    port: 8081
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
      index: path.resolve(__dirname, '../dist/index.html'),
      assetsRoot: path.resolve(__dirname, '../dist'),
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