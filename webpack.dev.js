const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('./src/assets/js/utils')


 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
   plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.pug',
      filename: 'index.html',
      inject: true
    }),
    ...utils.pages(),
  ]
 });