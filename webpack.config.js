/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const { NODE_ENV, PORT } = process.env;

const entry = [];
const plugins = [];

if (NODE_ENV === 'development') {
  entry.push(`webpack-dev-server/client?http://localhost:${PORT}`);
}

entry.push(
  '@babel/polyfill',
  './js/index'
);

plugins.push(new CopyWebpackPlugin({
  patterns: [
    { from: 'static' }
  ]
}));

module.exports = {
  entry,
  plugins,
  devServer: {
    port: PORT,
    open: true
  },
  context: __dirname,
  output: {
    path: path.resolve('dist/'),
    filename: 'js/app.js',
    chunkFilename: '[name]-chunk-[chunkhash].js',
    library: 'app',
    libraryTarget: 'var'
  },
  module: {
    rules: [{
      test: /.js?$/,
      use: ['babel-loader'],
      include: path.resolve('js/')
    }]
  },
  resolve: {
    alias: {
      Babel: 'babel-standalone'
    }
  },
  devtool: 'source-map',
  optimization: {
    minimize: true
  }
};
