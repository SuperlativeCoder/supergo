const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf')
const config = require('../../../../supergo.config')

module.exports = merge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.client.dev
    })
  ]
})