const path = require('path')
const webpack = require('webpack')
const FriendErrorsPlugin = require('friendly-errors-webpack-plugin')
const CaseSensitivePatWebpackPlugin = require('case-sensitive-paths-webpack-plugin')

const utils = require('../../util/utils')
const config = require('../../../../supergo.config')

function resolve(dir) {
  return path.join(__dirname, '../../../..', dir)
}

module.exports = {
  entry: [ 
    resolve('./src/client/main.ts') 
  ],
  output: {
    path: resolve('./dist/client'),
    filename: 'static/js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      { exclude: /node_modules/ },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            sourceMap: true,
            extract: true
          }),
          transformToRequire: {
            video: 'src',
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          },
          postcss: [
            require('postcss-cssnext')({
              browsers: ["> 1%", "last 2 versions", "ie > 8"]
            })
          ]
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
        test: /\.(png|jpeg|jpg|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'manager/static/img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 1000,
          name: 'manager/static/img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'manager/static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'manager/static/fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CaseSensitivePatWebpackPlugin(),
    new FriendErrorsPlugin()
  ]
}