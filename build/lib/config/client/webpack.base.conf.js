const path = require('path')
const webpack = require('webpack')
const FriendErrorsPlugin = require('friendly-errors-webpack-plugin')
const CaseSensitivePatWebpackPlugin = require('case-sensitive-paths-webpack-plugin')

const utils = require('../../util/utils')
const config = require('../../../../supergo.config')

function resolve(dir) {
  return path.join(__dirname, '../../../..', dir)
}

const { transformer, formatter } = require('../../webpack/resolveLoaderError')

module.exports = {
  entry: {
    app: [ resolve('./src/client/main.ts') ]
  },
  output: {
    path: resolve('./dist/client/'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src/client/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: '',
          transformToRequire: {
            video: 'src/client',
            source: 'src/client',
            img: 'src/client',
            image: 'xlink:href'
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/images/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'static/images/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CaseSensitivePatWebpackPlugin(),
    new FriendErrorsPlugin()
  ]
}