// Webpack uses this to work with directories
const path = require('path');
require("babel-polyfill");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  entry: ['babel-polyfill' ,'./src/js/index.js'],

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  watch: true,
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: 
              [
                /(node_modules)/,
                /(server)/
              ],
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          }
    ]
  },
  node: {
   fs: "empty"
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: process.env['NODE_ENV'] || 'development',
};
