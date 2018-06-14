const path = require('path');

module.exports = {
  ...require('./webpack.base.config'),
  entry: {
    main: [
      path.resolve(__dirname, '..', 'src', 'main.js'),
    ],
  },
  target: 'electron-main',
};
