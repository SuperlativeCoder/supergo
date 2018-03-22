const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf')
const config = require('../../../../supergo.config')

module.exports = merge(baseConfig,{
  mode: JSON.parse(config.client.dev.env.NODE_ENV),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.client.dev
    })
  ]
})