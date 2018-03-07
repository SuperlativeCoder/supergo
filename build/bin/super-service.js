const semver = require('semver')
const requireVersion = require('../../package.json').engines.node

if (!semver.satisfies(process.version, requireVersion)) {
  error(
    `You are using Node ${process.version}, but super-service ` +
    `requires Node ${requiredVersion}.\nPlease upgrade your Node version.`
  )
  process.exit(1)
}

const Service = require('../lib/service')
const service = new Service(process.cwd())

const rawArgv = process.argv.slice(2)
const args = require('minimist')(rawArgv)
const command = args._[0]

service.run(command, args, rawArgv).catch(err => {
  error(err)
  process.exit(1)
})
 