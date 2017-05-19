const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');


module.exports = (env = {}) => [
    !env.tests && new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (mod) => {
            if (typeof mod.userRequest === 'string') {
                return mod.userRequest.match(/node_modules/gi);
            }

            return false;
        }
    }),
    !env.tests && new CopyWebpackPlugin([
        { context: './static', from: '**/*' },
    ]),
    !env.tests && new OfflinePlugin(),
    !env.tests && new HtmlWebpackPlugin({
        template: './source/shell.html',
    }),
].filter(Boolean);
