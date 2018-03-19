const path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    path.resolve(__dirname, '../../../../src/scripts/index.ts')
  ],
  output: {
    path: path.resolve(__dirname, '../../../../scripts/'),
    filename: 'hubot.min.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      { exclude: /node_modules/ },
      { test: /\.ts(x?)$/, use: [{ loader: 'ts-loader' }] },
      { test: /\.json$/, use: [{ loader: 'json-loader' }]}
    ]
  },
  devtool: 'source-map'
}