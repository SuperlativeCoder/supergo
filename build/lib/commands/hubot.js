const shelljs = require('shelljs')

module.exports = (api, options) => {
  api.registerCommand('hubot', args => {
    const command = args._[0]
    console.log('hello hubot')
    shelljs.exec('set -e')
    shelljs.exec('yarn install')
    shelljs.exec('export PORT=8081')
    shelljs.exec('HUBOT_SLACK_TOKEN=${HUBOT_SLACK_TOKEN} node_modules/.bin/hubot --name "supergo" "$@" --adapter "slack"')
  })
}