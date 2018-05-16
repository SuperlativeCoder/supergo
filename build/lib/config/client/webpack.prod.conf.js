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
      sourceMap: config.client.prod.cssSourceMap,
      extract: true
    })
  },
  mode: 'development',
  devtool: config.client.prod.productionSourceMap ? '#source-map' : false,
  output: {
    path: resolve('./dist/client/'),
    filename: config.client.prod.assetsSubDirectory + '/js/[name].[hash].js',
    chunkFilename: utils.assetsPath(config.client.prod.assetsSubDirectory + '/js/[id].[hash].js'),
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': config.client.prod.env
    }),
    new HtmlWebpackPlugin({
      filename: resolve('./dist/client/manager/index.html'),
      template: resolve('./public/index.html'),
      inject: true,
      chunksSortMode: 'dependency'
    }),
    new ExtractTextPlugin({
      filename: config.client.prod.assetsSubDirectory + '/css/[name].[contenthash].css'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('./public'),
        to: resolve('./dist/client/manager/'),
        ignore: ['.*']
      }
    ]),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
})