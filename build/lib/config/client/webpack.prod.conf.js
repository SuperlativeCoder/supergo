const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = require('../../../../supergo.config')
const baseConfig = require('./webpack.base.conf')

function resolve(dir) {
  return path.join(__dirname, '../../../..', dir)
}

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: resolve('./dist/client/'),
    filename: 'static/js/[name].js',
    publicPath: '/'
  },
  plugins: [
    // new webpack.DefinePlugin({
    //     'process.env': config.client.dev
    // }),
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
      filename: resolve('./dist/client/static/css/[name].[contenthash].css')
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