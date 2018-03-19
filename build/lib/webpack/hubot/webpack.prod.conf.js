const path = require('path')
var webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, '../../../..', dir)
}

module.exports = {
  mode: 'production',
  entry: [
    resolve('./src/scripts/index.ts')
  ],
  output: {
    path: resolve('./scripts/'),
    filename: 'hubot.min.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
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