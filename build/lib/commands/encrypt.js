const chalk = require('chalk')
const crypto = require('crypto')
const { aesEncrypt } = require('../util/crytolib')

module.exports = (api, options) => {
    api.registerCommand('encrypt', {
        description: 'encrypt default AES256',
        usage: 'supergo-service encrypt ...',
        options: {
            '-p': `password`,
            '-s': 'source'
        }
    } ,args => {
        const command = args._[0]
        console.log(
            `\n  Encrypt Output:\n`
        )
        if(!args.m) {
            let enstr = aesEncrypt(args.p.toString(), args.s.toString())
            console.log(`    ${
                chalk.blue('[aes-256-ecb]: ')
            }${
                enstr || ''
            }`)
            console.log()
        }
    })
}