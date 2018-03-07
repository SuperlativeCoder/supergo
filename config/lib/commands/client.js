module.exports = (api, options) => {
    api.registerCommand('client', args => {
        const command = args._[0]
        console.log('hello world')
    })
}