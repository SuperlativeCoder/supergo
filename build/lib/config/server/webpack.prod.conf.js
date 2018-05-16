const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf')
const config = require('../../../../supergo.config')

config.client.prod.env.port = config.client.prod.port

module.exports = merge(baseConfig, {
  mode: JSON.parse(config.client.prod.env.NODE_ENV),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.client.prod.env
    })
  ],
})