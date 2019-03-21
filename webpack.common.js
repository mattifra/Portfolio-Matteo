const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');



module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Matteo Fratesi - Portfolio',
      template: './src/index.pug'
    }),
    // Plugin that simply copy files from sources to the output folder without any logic
    new CopyWebpackPlugin([
      {
        from: './src/img',
        // to: `${pathConfig.dist.images}`,
        ignore: [`icons/*.svg`]
      },
    ], {
      copyUnmodified: true, // force to copy all files even if there are no changes to avoid conflicts with the CleanWebpackPlugin in watch mod
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, 
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      { 
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
      },
    ]
  }
};