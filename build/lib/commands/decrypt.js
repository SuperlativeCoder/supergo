const crypto = require('crypto')

module.exports = (api, options) => {
    api.registerCommand('decrypt', {
        description: 'decrypt',
        usage: 'supergo-service encrypt ...',
        options: {
            '-m': `default AES256`,
            '-p': `password`,
            '-s': 'source'
        }
    } ,args => {
        const command = args._[0]
    })
}