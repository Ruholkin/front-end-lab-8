const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./src/js/interface-module.js",
	plugins: [
    new HtmlWebpackPlugin({
      title: "Homework 11",
      template: "./src/index.html",
      filename: "./dist/index.html"
    })
	],
	// module: {
 //    rules: [{
 //      test: /\.css$/,
 //      loader: new ExtractTextPlugin.extract({
 //        use: {
 //          loader: "css-loader",
 //          options: {
 //            minimize: true
 //          }
 //        }
 //      })
 //  	}]
 //  },
	output: {
		filename: "./dist/bundle.js"
	}
}