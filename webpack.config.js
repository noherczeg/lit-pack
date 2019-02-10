const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsConfigWebpackPlugin = require('ts-config-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'lit-pack.js',
    },
    plugins: [
        // Cleans the dist folder before the build starts
        new CleanWebpackPlugin(['dist']),
        // Generate a base html file and injects all generated css and js files
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        }),
        // Multi threading typescript loader configuration with caching for .ts and .tsx files
        // see https://github.com/namics/webpack-config-plugins/tree/master/packages/ts-config-webpack-plugin/config
        new TsConfigWebpackPlugin(),
    ],
};
