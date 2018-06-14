process.env.WEBPACK_TARGET_WEB = true;

module.exports = {
  ...require('./webpack.electron-renderer.config'),
  target: 'web',
};
