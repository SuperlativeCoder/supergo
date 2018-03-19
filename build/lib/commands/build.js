const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const shelljs = require('shelljs')
const webpack = require('webpack')

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
    shelljs.exec('tsc -p ./build/lib/config/hubot/tsconfig.json')
  }
}