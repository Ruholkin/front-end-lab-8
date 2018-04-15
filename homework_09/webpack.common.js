const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
    app: './src/app.js'
	},
  plugins: [
  	new CleanWebpackPlugin(['bin']),
  	new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      title: 'Homework 9',
      template: './src/app.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    })
  ],
  module: {
    rules :[
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					use: [
						{
							loader: "css-loader"
						},
						{
							loader: "sass-loader"
						}
						],
					fallback: "style-loader"
				})
			},
			{
				test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
			}
		]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'bin')
  }
}