const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = env => {
    return {
        context: __dirname,
        entry: [
            'babel-polyfill',
            './source/main'
        ],
        output: {
            path: path.resolve(__dirname, './app'),
            filename: '[name]-[hash].js',
            publicPath: '/',
        },
        resolve: {
            extensions: ['.jsx', '.js'],
            modules: [
                "node_modules",
                path.resolve(__dirname, "./source/")
            ],
            alias: {
                Components: path.resolve(__dirname, './source/view/components'),
            }
        },
        module: {
            loaders: [
                { test: /.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
                { test: /.css$/, use: ['style-loader', 'css-loader'] },
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: (mod) => {
                    if (typeof mod.userRequest === 'string') {
                        return mod.userRequest.match(/node_modules/gi);
                    }

                    return false;
                }
            }),
            new CopyWebpackPlugin([
                { context: './static', from: '**/*' },
            ]),
            new OfflinePlugin(),
            new HtmlWebpackPlugin({
                template: './source/shell.html',
            }),
        ],
        devtool: 'source-maps',
        devServer: {
            contentBase: path.resolve(__dirname, 'app/'),
        }
    }
};
