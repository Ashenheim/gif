const path = require('path');
const webpack = require('webpack');
const getCommonLoaders = require('./webpack.common-loaders');
const getCommonPlugins = require('./webpack.common-plugins');

module.exports = {
    context: path.resolve(__dirname, '..'),
    entry: [
        'babel-polyfill',
        './source/main'
    ],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name]-[hash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        modules: [
            "node_modules",
            path.resolve(__dirname, "../source/")
        ],
        alias: {
            Components: path.resolve(__dirname, '../source/view/components'),
        }
    },
    module: {
        loaders: getCommonLoaders(),
    },
    plugins: getCommonPlugins(),
    devtool: 'source-maps',
};
