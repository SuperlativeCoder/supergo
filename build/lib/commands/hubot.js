const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const address = require('address')
const shelljs = require('shelljs')
const { aesDecrypt } = require('../util/crytolib')
const { info, warn, error } = require('../util/logger')
const { hasYarn } = require('../util/env')

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
      commandStart(args, options)         
    }
  })

  function commandStart(args, options) {
    shelljs.exec('set -e')
    if (hasYarn()) {
      shelljs.exec('yarn install')
    } else {
      shelljs.exec('npm install')
    }
    let label = ''
    // supergo.config.js || config/*.env.js
    label += readUserConfig(args, options)
    label += readEnvConfig(args,options)
    // output info
    outputInfo(options)
    // exec
    shelljs.exec(label + 'node_modules/.bin/hubot --name "' + options.hubot.name + '" "$@" --adapter "slack"')
  }

  function readUserConfig(args, options) {
    let label = ''
    for(let key in options.hubot) {
      if (key !== 'env') {
        if (options.hubot[key].toString().indexOf('encrypt:') === -1) {
          label += (key.toUpperCase() + '=' + options.hubot[key] + ' ')
        } else {
          try {
            let decryptStr = aesDecrypt(args.start.toString(), options.hubot[key].substring(9, options.hubot[key].length - 1))
            label += (key.toUpperCase() + '=' + decryptStr + ' ')
          } catch (e) {
            error(
              `Error decrypt ${key.toUpperCase()}`
            )
            throw e
          }
        }
      }
      console.log(label)
    }
    return label
  }

  function readEnvConfig(args, options) {
    let label = ''
    if (!options.hubot.env) {
      return label
    }
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
          if (envConfig[key].toString().indexOf('encrypt:') === -1) {
            label += (key.toUpperCase() + '=' + envConfig[key] + ' ')
          } else {
            try {
              let decryptStr = aesDecrypt(args.start.toString(), envConfig[key].substring(9, options.hubot[key].length - 1))
              label += (key.toUpperCase() + '=' + decryptStr + ' ')
            } catch (e) {
              error(
                `Error decrypt ${key.toUpperCase()}`
              )
              throw e
            }
          }
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