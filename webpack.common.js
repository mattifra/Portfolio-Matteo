const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const utils = require('./src/assets/js/utils/utils');
const Critters = require('critters-webpack-plugin');
const IS_DEV = process.env.NODE_ENV === 'development';




module.exports = {
  entry: {
    app: './src/assets/js/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunks.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/views/index.pug',
      filename: 'index.html',
      inject: true
    }),
    new Critters(),
    ...utils.pages(),


    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery'
    }),

    new CopyWebpackPlugin([
      {
        from: './src//assets/img',
        to: './images',
        ignore: [`icons/*.svg`]
      },
    ], {
      copyUnmodified: true, // force to copy all files even if there are no changes to avoid conflicts with the CleanWebpackPlugin in watch mod
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
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
        test: /\.(png|svg|jpg|gif|webp)$/,
         use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          },
        },
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[c|a]ss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './webpack-configs/'
              }
            }
          }
        ]
      }
    ]
  }
};