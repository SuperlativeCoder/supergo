const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const address = require('address')
const shelljs = require('shelljs')
const { info, warn, error } = require('../util/logger')

module.exports = (api, options) => {
  api.registerCommand('hubot', args => {
    const command = args._[0]
    // --start
    if (args.start) {
      shelljs.exec('set -e')
      shelljs.exec('yarn install')
      let label = ''
      
      // supergo.config.js
      for(let key in options.hubot) {
        if (key !== 'env') {
          label += (key.toUpperCase() + '=' + options.hubot[key] + ' ')
        }
      }

      // config/*.env.js
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

      // output info
      console.log()
      console.log([
        `  Hubot running at:`,
        `  - LOCAL:   ${chalk.cyan('0.0.0.0:'+options.hubot.port)}`,
        `  - NETWORK: ${chalk.cyan(address.ip()+':'+options.hubot.port)}`,
        `  - NAME:    ${chalk.cyan(options.hubot.name)}`
      ].join('\n'))
      console.log()

      // exec
      shelljs.exec(label + 'node_modules/.bin/hubot --name "' + options.hubot.name + '" "$@" --adapter "slack"')           
    }
  })
}