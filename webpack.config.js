var webpack = require('webpack');
var path = require('path');

var config = {
    context: path.resolve(__dirname, 'source'),
    entry: {
        main: './app/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        contentBase: "public/"
    }
};

module.exports = config;