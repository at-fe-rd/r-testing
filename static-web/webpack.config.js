const path = require('path');
const webpack = require('webpack');
const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'assets');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [APP_DIR + '/js/cal.js', APP_DIR + '/css/cal.css'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: BUILD_DIR,
    port: 4200,
    open: true,
    progress: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { cacheDirectory: true }
        }
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'calculator.html'
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
