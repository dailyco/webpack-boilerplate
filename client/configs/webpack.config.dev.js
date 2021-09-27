const path = require('path');
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfigDev = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist/js/'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],
  devtool: 'inline-source-map',
};

module.exports = merge(require('./webpack.config.common'), webpackConfigDev);
