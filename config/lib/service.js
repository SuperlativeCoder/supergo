module.exports = class Service {
  constructor (context, { plugins, pkg, projectOptions, useBuiltIn } = {}) {
    process.SUPERGO_SERVICE = this
    this.context = context
    
  }

  run(name, args = {}, rawArgv = []) {
    const { fn } = command
    return Promise.resolve(fn(args, rawArgv))
  }
  
  /* 
  * generator webpackconfig
  */
  resolveWebpackConfig() {

  }
}