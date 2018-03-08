module.exports = (api, options) => {
  api.registerCommand('serve', {
    description: 'start server',
    usage: 'supergo-service serve [options]',
    options: {
      '--start': `start server`
    }
  }, args => {
    const command = args._[0]
    
  })
}