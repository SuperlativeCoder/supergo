module.exports = (api, options) => {
  api.registerCommand('help', args => {
    const command = args._[0]
    console.log('hello help')
  })
}