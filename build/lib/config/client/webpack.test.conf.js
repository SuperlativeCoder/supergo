const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const config = require('../../../../supergo.config')
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