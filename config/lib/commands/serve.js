module.exports = (api, options) => {
  api.registerCommand('serve', args => {
    const command = args._[0]
    console.log('hello world')
  })
}