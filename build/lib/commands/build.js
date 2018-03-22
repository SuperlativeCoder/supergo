const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const shelljs = require('shelljs')
const webpack = require('webpack')

const testClientWebpackConfig = require('../config/client/webpack.test.conf')
const prodClientWebpackConfig = require('../config/client/webpack.prod.conf')
const testServerWebpackconfig = require('../config/server/webpack.test.conf')
const prodServerWebpackConfig = require('../config/server/webpack.prod.conf')

module.exports = (api, options) => {
  api.registerCommand('build', {
    description: 'build & complier',
    usage: 'supergo-service build [options]',
    options: {
      '--hubot': `build hubot server`,
      '--test': `build test server`,
      '--prod': `build prod server`
    }
  }, args => {
    const command = args._[0]
    if (args.hubot) {
      buildHubot()
    } else if (args.test) {
      buildByWebpack('test client', testClientWebpackConfig)
      buildByWebpack('test server', testServerWebpackconfig)
    } else if (args.prod) {
      buildByWebpack('test client', prodClientWebpackConfig)
      buildByWebpack('prod server', prodServerWebpackConfig)
    }
  })

  /**
   * test server
   */
  function buildByWebpack(name, webpackConfig) {
    // build server
    webpack(webpackConfig, function(err, stats) {
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')

      if (stats.hasErrors()) {
        console.log(chalk.red('  Build ' + name + ' failed with errors.\n'))
        process.exit(1)
      }
      console.log(chalk.cyan('  Build ' + name + ' complete.\n'))
    })
  }

  function buildHubot() {
    var spinner = ora('building hubot for production...')
    spinner.start()
    var child = shelljs.exec('tsc -p ./build/lib/config/hubot/tsconfig.json'
      , function(code, stdout, stderr){
        spinner.stop()
        console.log(chalk.cyan('\n  Build Hubot complete. \n'))
    })
  }
}