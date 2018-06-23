const path = require('path')
const webpack = require('webpack')
const FriendErrorsPlugin = require('friendly-errors-webpack-plugin')
const CaseSensitivePatWebpackPlugin = require('case-sensitive-paths-webpack-plugin')

const slugify = require('transliteration').slugify;
const utils = require('../../util/utils')

function resolve(dir) {
  return path.join(__dirname, '../../../..', dir)
}

var wrap = function(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
};

module.exports = {
  entry: [ 
    resolve('./docs/src/main.ts') 
  ],
  output: {
    path: resolve('./dist/docs'),
    filename: 'static/js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.md'],
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
          name: 'static/img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 1000,
          name: 'static/img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          // markdown-it config
          preset: 'default',
          breaks: true,
          preprocess: function(markdownIt, source) {
            return source;
          },
          use: [
            [require('markdown-it-anchor'), {
              level: 2,
              slugify: slugify,
              permalink: true,
              permalinkBefore: true,
              permalinkSymbol: '#'
            }],
            [require('markdown-it-container'),'demo', {
              validate: function(params) {
                return params.trim().match(/^demo\s*(.*)$/);
              },
              render: function(tokens, idx) {
                var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                if (tokens[idx].nesting === 1) {
                  var description = (m && m.length > 1) ? m[1] : ''
                  var content = tokens[idx + 1].content;
                  var descriptionHTML = description ? md.render(description) : ''

                  return `<vs-SourceBlock>
                    <div>${content}</div>
                    ${descriptionHTML}
                    <div slot="source">`
                }
                return `</div></vs-SourceBlock>`
              }
              }],
            [require('markdown-it-container'), 'tip'],
            [require('markdown-it-container'), 'warning']
          ]
        }
      }
    ]
  },
  plugins: [
    new CaseSensitivePatWebpackPlugin(),
    new FriendErrorsPlugin()
  ]
}