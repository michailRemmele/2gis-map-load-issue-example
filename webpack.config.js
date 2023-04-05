const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',

  entry: './src/index.jsx',

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },

  resolve: {
    extensions: [ '.js', '.jsx' ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
   }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      }
    ]
  }
};