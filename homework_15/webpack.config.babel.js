import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const webpackConfig = {
  // Entry point of webpack dependencies graph
  entry: './src/root.js',
  // Run webpack in development mode
  mode: 'development',
  resolve: {
    // Automatically resolve extensions.
    extensions: ['.js', '.jsx', '.scss'],
  },
  output: {
    // The output directory as an absolute path
    path: path.resolve(__dirname, 'dist'),
    // The name of output bundle
    filename: 'app.bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        // Ingore .js || .jsx files inside ./node_moduleas folder
        exclude: /node_modules/,
        /**
         * Use babel-loader to execute js/jsx files
         * babel-preset-env for compiling Javascript ES6 code down to ES5
         * babel-preset-react for compiling JSX and other stuff down to JS
         */
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        // Ingore .scss files inside ./node_moduleas folder
        exclude: /node_modules/,
        use: [
          // creates style nodes from JS strings
          {loader: "style-loader"},
          // translates CSS into CommonJS
          {loader: "css-loader"},
          // compiles Sass to CSS
          {loader: "sass-loader"},
        ],
      },
      {
        // Use url-loader with file-loader to handle file with following ext.
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?name=assets/fonts/[name].[ext]&limit=100000'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Provide path to existing index.html file.
      // It will automatically append app.bundle.js to the file
      template: './src/index.html',
    }),
  ],
  devServer: {
    // Tell the server where to serve content from
    contentBase: path.resolve(__dirname, 'dist'),
    // Enable gzip compression for everything served
    compress: true,
    // Specify a port number to listen for requests on
    port: 9000,
  },
};

export default webpackConfig;