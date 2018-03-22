const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = require('../../../../supergo.config')
const baseConfig = require('./webpack.base.conf')

function resolve(dir) {
  return path.join(__dirname, '../../../..', dir)
}

// add hot-reload related code to entry chunks
Object.keys(baseConfig.entry).forEach(function (name) {
  ['./build/dev-client'].concat(baseConfig.entry)
})

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      //'process.env': config.client.dev
    }),
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash].css'
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