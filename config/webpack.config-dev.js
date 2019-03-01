const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'lit-pack.js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'inline-source-map',
  plugins: [
    // Cleans the dist folder before the build starts
    new CleanWebpackPlugin(['dist']),
    // Generate a base html file and injects all generated css and js files
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html'
    }),
  ],
};
