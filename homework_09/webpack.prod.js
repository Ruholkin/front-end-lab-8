const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackBundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
	devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
    	uglifyOptions: {
        beautify: false,
        compress: true,
        comments: false,
        mangle: false,
        toplevel: false,
        keep_fnames: true
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new WebpackBundleAnalyzerPlugin(),
  ],
});