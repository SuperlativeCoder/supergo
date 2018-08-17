const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseConfig = require('./webpack.base.conf')
const utils = require('../../util/utils')


function resolve(dir) {
  return path.join(__dirname, '../../../..', dir)
}

module.exports = merge(baseConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true
    })
  },
  mode: 'development',
  devtool: '#source-map',
  output: {
    path: resolve('./dist/docs/'),
    filename: 'static/js/[name].[hash:7].js',
    chunkFilename: 'static/js/[id].[hash:7].js',
    publicPath: '/supergo'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'static/css/[name].[hash:7].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./docs/index.html'),
      inject: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve('./docs/index.html'),
        to: resolve('./dist/docs/'),
        ignore: ['.*']
      }
    ]),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
})