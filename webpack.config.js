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
        publicPath: '/'
    }
};

module.exports = config;