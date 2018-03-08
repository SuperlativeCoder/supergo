const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const address = require('address')
const shelljs = require('shelljs')
const { info, warn, error } = require('../util/logger')

module.exports = (api, options) => {
  api.registerCommand('hubot', {
    description: 'start hubot server',
    usage: 'supergo-service hubot [options]',
    options: {
      '--start': `start hubot server`
    }
  },args => {
    info('Starting hubot server...')
    const command = args._[0]
    if (args.start) {
      commandStart(options)         
    }
  })

  function commandStart(options) {
    shelljs.exec('set -e')
    shelljs.exec('yarn install')
    let label = ''
    // supergo.config.js || config/*.env.js
    label += readUserConfig(options)
    label += readEnvConfig(options)
    // output info
    outputInfo(options)
    // exec
    shelljs.exec(label + 'node_modules/.bin/hubot --name "' + options.hubot.name + '" "$@" --adapter "slack"')
  }

  function readUserConfig(options) {
    let label = ''
    for(let key in options.hubot) {
      if (key !== 'env') {
        label += (key.toUpperCase() + '=' + options.hubot[key] + ' ')
      }
    }
    return label
  }

  function readEnvConfig(options) {
    let label = ''
    let envPath = path.resolve(api.service.context, options.hubot.env)
    if (fs.existsSync(envPath)) {
      try {
        let envConfig = require(envPath)
        if (!envConfig || typeof envConfig !== 'object') {
          error(
            `Error loading ${chalk.bold('hubot.evn: *.env.js')}: should export an object.`
          )
          envConfig = null
        }
        for (let key in envConfig) {
          label += (key.toUpperCase() + '=' + envConfig[key] + ' ')
        }
      } catch (e) {
        warn(`Error loading ${chalk.bold('hubot.evn: *.env.js')}:`)
      }
    }
    return label
  }

  function outputInfo(options) {
    console.log()
    console.log([
      `  Hubot running at:`,
      `  - LOCAL:   ${chalk.cyan('0.0.0.0:'+options.hubot.port)}`,
      `  - NETWORK: ${chalk.cyan(address.ip()+':'+options.hubot.port)}`,
      `  - NAME:    ${chalk.cyan(options.hubot.name)}`
    ].join('\n'))
    console.log()
  }
}