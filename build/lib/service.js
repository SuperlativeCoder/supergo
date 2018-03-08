const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const readPkg = require('read-pkg')
const merge = require('webpack-merge')
const Config = require('webpack-chain')
const Api = require('./api')
const { warn, error } = require('./util/logger')

const { defaults, validate } = require('./options')

module.exports = class Service {
  constructor (context, { plugins, pkg, projectOptions, useBuiltIn } = {}) {
    process.SUPERGO_SERVICE = this
    this.context = context
    this.webpackChainFns = []
    this.webpackRawConfigFns = []
    this.devServerConfigFns = []
    this.commands = {}
    this.pkg = this.resolvePkg(pkg)
    // load project options
    const userOptions = this.loadProjectOptions(projectOptions)
    const defaultOptions = defaults() // temp
    this.projectOptions = Object.assign({}, userOptions)

    // load plugins & register commands
    this.plugins = this.resolvePlugins(plugins, useBuiltIn)
    this.plugins.forEach(({id, apply}) => {
      apply(new Api(id, this), this.projectOptions)
    });
    
    // apply webpack configs from project config file
    if (this.projectOptions.chainWebpack) {
      this.webpackChainFns.push(this.projectOptions.chainWebpack)
    }
    if (this.projectOptions.configureWebpack) {
      this.webpackRawConfigFns.push(this.projectOptions.configureWebpack)
    }
  }

  run(name, args = {}, rawArgv = []) {
    args._ = args._ || []
    let command = this.commands[name]
    if (!command && name) {
      error(`command "${name}" does not exist.`)
      process.exit(1)
    }
    if (!command || args.help) {
      command = this.commands.help
    } else {
      args._.shift()
      rawArgv.shift()
    }
    const { fn } = command
    return Promise.resolve(fn(args, rawArgv))
  }
  
  loadProjectOptions(inlineOptions) {
    let fileConfig
    const configPath = path.resolve(this.context, 'supergo.config.js')
    if (fs.existsSync(configPath)) {
      try {
        fileConfig = require(configPath)
        if (!fileConfig || typeof fileConfig !== 'object') {
          error(
            `Error loading ${chalk.bold('supergo.config.js')}: should export an object.`
          )
          fileConfig = null
        }
      } catch (e) {
        error(`Error loading ${chalk.bold('supergo.config.js')}:`)
        throw e
      }
    }
    return fileConfig
  }

  resolvePlugins() {
    const idToPlugin = id => ({
      id: id.replace(/^.\//, 'built-in:'),
      apply: require(id)
    })

    const builtInPlugins = [
      './commands/hubot',
      './commands/help',
      './commands/hubot',
      './commands/serve'
    ].map(idToPlugin)
    
    return builtInPlugins
  }

  resolvePkg(inlinePkg) {
    if (inlinePkg) {
      return inlinePkg
    } else if (fs.existsSync(path.join(this.context, 'package.json'))) {
      return readPkg.sync(this.context)
    } else {
      return {}
    }
  }
  
  resolveWebpackConfig() {

  }
}