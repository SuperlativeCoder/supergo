const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const config = require('../../../../supergo.config')
const baseConfig = require('./webpack.base.conf')
const utils = require('../../util/utils')

function resolve(dir) {
  return path.join(__dirname, '../../../..', dir)
}

module.exports = merge(baseConfig, {
  module: {
    rules: utils.styleLoaders({
      extract: true,
      sourceMap: config.client.test.cssSourceMap
    })
  },
  mode: 'development',
  devtool: config.client.test.productionSourceMap ? '#source-map' : false,
  output: {
    path: resolve('./dist/client/'),
    filename: config.client.test.assetsSubDirectory + '/js/[name].[chunkhash].js',
    chunkFilename: utils.assetsPath(config.client.test.assetsSubDirectory + '/js/[id].[chunkhash].js'),
    publicPath: config.client.test.assetsPublicPath
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': config.client.test.env
    }),
    new HtmlWebpackPlugin({
      filename: resolve('./dist/client/index.html'),
      template: resolve('./public/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new ExtractTextPlugin({
      filename: config.client.test.assetsSubDirectory + '/css/[name].[contenthash].css'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('./public'),
        to: resolve('./dist/client'),
        ignore: ['.*']
      }
    ]),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
})