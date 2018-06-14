const path = require('path');

const nodeModulePath = path.resolve(__dirname, '..', 'node_modules');

module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: nodeModulePath,
        test: /\.js$/,
        use: 'eslint-loader',
      },
      {
        exclude: nodeModulePath,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: '> 1%',
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
    ],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
};
