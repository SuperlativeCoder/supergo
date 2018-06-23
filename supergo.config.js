var path = require('path')

module.exports = {
  hubot: {
    path: '"node_modules/.bin:node_modules/hubot/node_modules/.bin:$PATH"',
    name: 'supergo',
    port: 8081,
    hubot_slack_token: '"encrypt:b10d4a1895617193900f10610459d4b082942f061a13a272040c5d799f4ec61135ac991480375a66c174bb84137f89fb"',
    hubot_jenkins_url: 'http://*.*.*.*:8080/',
    hubot_jenkins_auth: '"encrypt:71ebd42c291e803e83e1b52004dc816f78be961d7b1f2211353781a935c49c18"'
  },
  client: {
    dev: {
      env: require('./config/env/dev.env.js'),
      port: 8082,
      assetsSubDirectory: 'manager/static',
      proxy: require('./config/proxy/dev.proxy')
    },
    prod: {
      env: require('./config/env/prod.env.js'),
      port: 8082,
      cssSourceMap: false,
      productionSourceMap: false,
      assetsSubDirectory: 'static',
      proxy: require('./config/proxy/prod.proxy')
    },
    test: {
      env: require('./config/env/test.env.js'),
      port: 8082,
      cssSourceMap: true,
      productionSourceMap: true,
      assetsSubDirectory: 'manager/static',
      proxy: require('./config/proxy/dev.proxy')
    }
  }
}