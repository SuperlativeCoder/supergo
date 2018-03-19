const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')

const webpackConfig = require('../webpack/hubot/webpack.prod.conf')

var spinner = ora('building ...')
spinner.start()

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

    } else if (args.prod) {

    }
  })

  function buildHubot() {
    
    webpack(webpackConfig, function (err, stats) {
      spinner.stop()
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')
      if (stats.hasErrors()) {
        console.log(chalk.red('  Build Hubot failed with errors.\n'))
        process.exit(1)
      }
      console.log(chalk.cyan('  Build Hubot complete.\n'))
    })
  }
}