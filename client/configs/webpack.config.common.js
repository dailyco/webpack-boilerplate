const path = require('path');

module.exports = {
  stats: 'minimal',
  context: path.resolve(__dirname, '../src/'),
  entry: {
    index: './views/index.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: ['/node_modules'],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src/'),
      scss: path.resolve(__dirname, '../src/public/scss/'),
      views: path.resolve(__dirname, '../src/views/'),
    },
  },
};
