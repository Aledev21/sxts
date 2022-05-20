const { relative } = require('path')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  stats: {
    warnings: false
  },
  mode: 'development',
  
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
   },
  plugins:  [
    new htmlWebpackPlugin({ template:   path.resolve(__dirname, 'public', 'index.html') })
  ],
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],

  }
}