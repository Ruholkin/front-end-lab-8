const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './bin',
    compress: true,
  	port: 8080 //default
  }
});