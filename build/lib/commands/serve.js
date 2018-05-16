const koa = require('koa')
const logger = require('koa-logger')
const chalk = require('chalk')
const shelljs = require('shelljs')
const webpack = require('webpack')
const koaWebpack = require('koa-webpack')
const webpackConfig = require('../config/docs/webpack.dev.conf')

const { hasYarn } = require('../util/env')
const { info, error } = require('../util/logger')
const config = require('../../../supergo.config')

module.exports = (api, options) => {
  api.registerCommand('serve', {
    description: 'start server',
    usage: 'supergo-service serve [options]',
    options: {
      '--dev'  : `start development server, default port: 8080`,
      '--docs' : `start docs server, default port: {dev_port + 1}`
    }
  }, args => {
    const command = args._[0]
    if (args.dev) {
      commandRunServer(api, options.client.dev)
    } else if (args.docs) {
      commandRunDocsServer(api, options.client.dev)
    }
  })

  function commandRunServer(api, options) {
    resolveEnv(options.env)
    const port = !config.client.dev.port ? 8080 : config.client.dev.port
    shelljs.exec('set -e')
    shelljs.exec('cross-env port=' + port + ' nodemon --watch "./src/server/**/*" -e ts,tsx --exec "ts-node" src/server/index.ts')
  }

  function commandRunDocsServer(api, options) {
    const port = !config.client.dev.port ? 8080 : config.client.dev.port + 1
    const app = new koa()
    app.use(koaWebpack({
        config: webpackConfig,
        hot: { log: false, heartbeat: 2000 },
        dev: { publicPath: '/', stats: 'none', logLevel: 'error' },
    }))
    app.use(logger())
    app.listen(port)
    console.log(`Server running on port ${ port }`)
  }

  function resolveEnv(env) {
    if (!process.env.NODE_ENV) {
      process.env.NODE_ENV = JSON.parse(env.NODE_ENV)
    }
  }
}