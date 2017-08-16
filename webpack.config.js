const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: path.join(__dirname, 'app/frontend'),
  // entry: [
  //   // 'react-hot-loader/patch',
  //   // activate HMR for React
  //
  //   'webpack-dev-server/client?http://localhost:8080',
  //   // bundle the client for webpack-dev-server
  //   // and connect to the provided endpoint
  //
  //   'webpack/hot/only-dev-server',
  //   // bundle the client for hot reloading
  //   // only- means to only hot reload for successful updates
  //
  //   './javascripts/index.js',
  //   // the entry point of our app
  // ],
  entry: './javascripts/index.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts/'),
    publicPath: '/',
    // filename: "[name]-[hash].js"
    filename: "[name].js"
    // filename: 'javascripts/[name].bundle.js',
    // chunkFilename: 'javascripts/[id].bundle.js',
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.sss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIndentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js'
              }
            }
          }
        ]
      },
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
      _: 'lodash'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleTracker({
      path: __dirname,
      filename: './config/webpack-stats.json'
    })
  ],
  devServer: {
    host: 'localhost',
    proxy: {
      '*': 'http://127.0.0.1:8000'
    },
    port: 8080,
    contentBase: path.join(__dirname, 'public'),
    // contentBase: 'http://127.0.0.1:8080/public/',
    historyApiFallback: true,
    hot: true
  }
}
