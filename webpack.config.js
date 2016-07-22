var webpack = require('webpack');
var path = require('path');

var config = {
    context: path.join(__dirname, 'source'),
    entry: {
        main: './app/main.js',
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: '/public/'
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
        ],
    },
    watch: true,
    devServer: {
        contentBase: 'public'
    }
};

module.exports = config;