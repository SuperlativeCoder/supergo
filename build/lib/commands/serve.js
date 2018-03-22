const koa = require('koa')
const chalk = require('chalk')
const shelljs = require('shelljs')
const webpack = require('webpack')
const hotMiddleware = require('koa-webpack')
const proxyMiddleware = require('koa-proxy')

const { hasYarn } = require('../util/env')
const { info, error } = require('../util/logger')
const config = require('../../../supergo.config')

module.exports = (api, options) => {
  api.registerCommand('serve', {
    description: 'start server',
    usage: 'supergo-service serve [options]',
    options: {
      '--dev'  : `start development server`
    }
  }, args => {
    const command = args._[0]
    if (args.dev) {
      commandRunServer(api, options.client.dev)
    }
  })

  function commandRunServer(api, options) {
    resolveEnv(options.env)
    let port = 8080
    if (process.env.NODE_ENV === 'development') {
      port = config.client.dev.port
    } else if (process.env.NODE_ENV === 'production') {
      port = config.client.prod.port
    } else if (process.env.NODE_ENV === 'test') {
      port = config.client.test.port
    }
    shelljs.exec('set -e')
    shelljs.exec('cross-env port=' + port + ' nodemon --watch "./src/server/**/*" -e ts,tsx --exec "ts-node" src/server/index.ts')
  }

  function resolveEnv(env) {
    if (!process.env.NODE_ENV) {
      process.env.NODE_ENV = JSON.parse(env.NODE_ENV)
    }
  }
}