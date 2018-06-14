process.env.WEBPACK_TARGET_WEB = true;

module.exports = {
  ...require('./webpack.electron-renderer.config'),
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  target: 'web',
  serve: {
    hot: {
      hmr: false,
    },
  },
};
