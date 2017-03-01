var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: './main.ts',
  output: {
    path : path.resolve(__dirname,"dist"),
    publicPath : "/mydist/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}