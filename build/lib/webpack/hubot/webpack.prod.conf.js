const path = require('path')
var webpack = require('webpack')

module.export = {
  entry: {
    app: ['./src/scripts/index.ts']
  },
  output: {
    path: './scripts/',
    filename: 'hubot.min.js',
  },
  resolue: {
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