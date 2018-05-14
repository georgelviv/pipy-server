const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

console.log(path.join(paths.WEB_SRC_DIR, 'index.js'))

module.exports = {
  entry: path.join(paths.WEB_SRC_DIR, 'index.js'),
  output: {
    filename: 'app.js',
    path: paths.DESTANATION_DIR
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ],
          plugins: []
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  resolve: {
    alias: {
      common: paths.WEB_ALIAS_COMMON_DIR
    },
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new CleanWebpackPlugin([paths.DESTANATION_DIR], {
      root: paths.ROOT
    }),
    new HtmlWebpackPlugin({
      filename: path.join(paths.DESTANATION_DIR, 'index.html'),
      template: path.join(paths.PUBLIC_SRC_DIR, 'index.html'),
      inject: true
    }),
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([
      { from: paths.WEB_ASSETS_DIR, to: paths.PUBLIC_ASSETS_DIR }
    ])
  ]
};