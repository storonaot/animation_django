const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'app/frontend'),
  // entry: [
  //   'react-hot-loader/patch',
  //   'webpack-dev-server/client?http://localhost:8080',
  //   'webpack/hot/only-dev-server',
  //   './javascripts/index.js',
  //   './stylesheets/index.js'
  // ],
  entry: {
    javascripts: './javascripts/index.js',
    styles: './stylesheets/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/javascripts/'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'public'),
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.js?$/,
        exclude: [
          path.resolve(__dirname, 'public'),
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader'
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.sss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1, modules: true, localIndentName: '[name]__[local]___[hash:base64:5]' } },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: './postcss.config.js'
                }
              }
            }
          ]
        })
      },
      // {
      //   test: /\.sss$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 1,
      //         modules: true,
      //         localIndentName: '[name]__[local]___[hash:base64:5]'
      //       }
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         config: {
      //           path: './postcss.config.js'
      //         }
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 102400,
              name: '[path][name].[ext]?[hash:base64]'
            }
          }
        ]
      }
    ]

  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, './app/frontend/components')
    ],
    extensions: ['.js', '.css', '.jsx', '.sss']
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash',
      axios: 'axios'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleTracker({
      path: __dirname,
      filename: './config/webpack-stats.json'
    }),
    new StyleLintPlugin({
      configFile: './.stylelintrc',
      syntax: 'sugarss'
    }),
    // new ExtractTextPlugin('stylesheets/[name].bundle.[chunkhash].css')
    new ExtractTextPlugin({
      filename: 'stylesheets/[name].bundle.[chunkhash].css',
      allChunks: true
    })
  ],
  devServer: {
    host: 'localhost',
    proxy: {
      '*': 'http://127.0.0.1:8000'
    },
    port: 8080,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true
  }
}
