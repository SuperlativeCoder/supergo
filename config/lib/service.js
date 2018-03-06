module.exports = class Service {
  constructor () {

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