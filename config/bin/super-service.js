const semver = require('semver')
const requireVersion = require('../../package.json').engines.node

if (!semver.satisfies(process.version, requireVersion)) {
  error(
    `You are using Node ${process.version}, but super-service ` +
    `requires Node ${requiredVersion}.\nPlease upgrade your Node version.`
  )
  process.exit(1)
}

const shelljs = require('shelljs/global')

 