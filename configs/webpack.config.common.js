const path = require('path');

module.exports = {
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
};
