const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = require('../../../../supergo.config')
const baseConfig = require('./webpack.base.conf')
const utils = require('../../util/utils')

function resolve(dir) {
  return path.join(__dirname, '../../../..', dir)
}

// add hot-reload related code to entry chunks
Object.keys(baseConfig.entry).forEach(function (name) {
  ['./build/dev-client'].concat(baseConfig.entry)
})

module.exports = merge(baseConfig, {
  module: {
    rules: utils.styleLoaders({
      extract: true,
      sourceMap: true
    })
  },
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.client.dev.env
    }),
    new ExtractTextPlugin({
      filename: config.client.dev.assetsSubDirectory + '/css/[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./public/index.html'),
      inject: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})