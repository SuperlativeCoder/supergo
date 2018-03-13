const koa = require('koa')
const chalk = require('chalk')
const webpack = require('webpack')
const hotMiddleware = require('koa-webpack')
const { hasYarn } = require('../util/env')
const { info, error } = require('../util/logger')

const defaults = { mode: 'development', host: '0.0.0.0', port: 8082, https: false }

module.exports = (api, options) => {
  api.registerCommand('serve', {
    description: 'start server',
    usage: 'supergo-service serve [options]',
    options: {
      '--dev'  : `start development server`,
      '--start': `start server`
    }
  }, args => {
    const command = args._[0]
    if (args.dev) {
      commandRunServer(api, options.dev)
    } else if (args.start) {
      commandRunServer(api, options.start)
    }
  })

  function commandRunServer(api, options) {
    
  }

}