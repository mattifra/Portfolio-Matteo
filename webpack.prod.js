 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const utils = require('./src/assets/js/utils')



 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.pug',
      filename: '../index.html',
      inject: true
    }),
    ...utils.pages(),
  ]
 });