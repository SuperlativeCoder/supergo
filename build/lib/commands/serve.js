const koa = require('koa')
const chalk = require('chalk')
const shelljs = require('shelljs')
const webpack = require('webpack')
const hotMiddleware = require('koa-webpack')
const proxyMiddleware = require('koa-proxy')
const { hasYarn } = require('../util/env')
const { info, error } = require('../util/logger')

const defaults = { mode: 'development', host: '0.0.0.0', port: 8082, https: false }

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
    if (process.env.NODE_ENV === 'development') {
      shelljs.exec('set -e')
      shelljs.exec('nodemon --watch "./src/server/**/*" -e ts,tsx --exec "ts-node" src/server/index.ts')
    } else {
      // env is not 'development'
    }
  }

  function resolveEnv(env) {
    if (!process.env.NODE_ENV) {
      process.env.NODE_ENV = JSON.parse(env.NODE_ENV)
    }
  }
}