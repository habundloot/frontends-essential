const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './Resources/Private/src/Javascript/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './Resources/Public/dist')
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      // scss ----------------------------------------------------------------------------------------------------
      {
        test: /\.(scss)$/,
        include: path.resolve(__dirname, "./Resources/Private/src/StyleSheets"),
        use: [{
          loader: 'style-loader',
        },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: {
                safe: true
              }
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, {
            loader: 'sass-loader',
          }]
      },
      // @todo Make Fonts work
      // fonts ---------------------------------------------------------------------------------------------------
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /Images/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: '/Resources/Public/dist/fonts/'
          }
        }]
      },
      // @todo Make Images work
      // images --------------------------------------------------------------------------------------------------
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            publicPath: '/Resources/Public/dist/images/'
          }
        }]
      }
    ]
  }
};

module.resolve = {
  modules: [path.resolve(__dirname, './Resources/Private/src'), 'node_modules'],
};
