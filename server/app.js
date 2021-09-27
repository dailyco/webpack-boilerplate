const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./../client/configs/webpack.config.dev');
const compiler = webpack(webpackConfig);

const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
}

app.use(express.static('dist'));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});
app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(3000, () => console.log('listening on http://localhost:3000'));
