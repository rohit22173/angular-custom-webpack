const webpack = require('webpack');
const helpers = require('./configs/helpers');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'app': './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    minimize: true,
    runtimeChunk: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};