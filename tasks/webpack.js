const webpack = require('webpack');
const gutil = require('gulp-util');
const webpackConfig = require('./webpack.config');
const webpackTestConfig = require('./webpack.config.test');
const { mochaMessenger } = require('./mocha');


const webpackCallback = (cb) => (err, stats) => {
    if (err) {
        gutil.PluginError('webpack', err.message || err);
    }

    gutil.log(stats.toString({
        colors: true,
        chunks: false,
    }));

    if (typeof cb === 'function') cb();
};

const webpackCompile = () => new Promise(resolve => {
    webpack(webpackConfig, webpackCallback(resolve));
});

const webpackTestCompile = () => new Promise(resolve => {
    webpack(webpackTestConfig).watch({}, mochaMessenger(resolve));
});

const createWebpackConfigWithHot = (config) => {
    config.entry.unshift(
        'webpack-hot-middleware/client?reload=true'
    );

    config.plugins = config.plugins.concat(
        new webpack.HotModuleReplacementPlugin()
    );

    return config;
}

module.exports = {
    webpackCompile,
    webpackTestCompile,
    webpackConfig,
    webpackCallback,
    createWebpackConfigWithHot,
};
