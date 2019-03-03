const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prodConfig = require('./webpack.config-prod');

module.exports = {
  ...prodConfig,
  devtool: 'inline-source-map',
};
