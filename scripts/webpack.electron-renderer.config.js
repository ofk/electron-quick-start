const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...require('./webpack.base.config'),
  entry: {
    renderer: [
      path.resolve(__dirname, '..', 'src', 'renderer.js'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'index.html'),
      minify: {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true,
      },
    }),
  ],
  target: 'electron-renderer',
};
