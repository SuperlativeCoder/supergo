const chalk = require('chalk')
const crypto = require('crypto')
const { aesDecrypt } = require('../util/crytolib')

module.exports = (api, options) => {
    api.registerCommand('decrypt', {
        description: 'decrypt default aes-256-ecb',
        usage: 'supergo-service encrypt ...',
        options: {
            '-p': `password`,
            '-s': 'source'
        }
    } ,args => {
        const command = args._[0]
        console.log(
            `\n  Decrypt Output:\n`
        )
        if(!args.m) {
            let enstr = aesDecrypt(args.p.toString(), args.s.toString())
            console.log(`    ${
                chalk.blue('[aes-256-ecb]: ')
            }${
                enstr || ''
            }`)
            console.log()
        }
    })
}