const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf')
const config = require('../../../../supergo.config')

config.client.test.env.port = config.client.test.port

module.exports = merge(baseConfig, {
  mode: JSON.parse(config.client.prod.env.NODE_ENV),
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.client.test.env
    })
  ],
})