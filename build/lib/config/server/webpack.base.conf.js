const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');

function resolve(dir) {
  return path.resolve(__dirname, '../../../..', dir)
}

module.exports = {
  devtool: 'source-map',
  target: 'node',
  entry: [
    resolve('./src/server/index.ts')
  ],
  output: {
    path: resolve('./dist/server'),
    filename: '[name].min.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      { exclude: /node_modules/ },
      { test: /\.ts(x?)$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  externals: [ nodeExternals() ]
}