const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  devtool: true,
  output: [
    
  ],
  plugins: [
    new webpack.DefinePlugin({
        'process.env': config.client.dev
    })
  ]
})