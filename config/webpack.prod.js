const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackCommon = require('./webpack.common');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(webpackCommon, {
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});