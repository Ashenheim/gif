const glob = require('glob');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const getCommonLoaders = require('./webpack.common-loaders');
const getCommonPlugins = require('./webpack.common-plugins');
const webpackConfig = require('./webpack.config');

const tests = true;


const files = glob.sync('source/**/*.spec.js');
const entries = files.reduce((e, f) => {
    const filepath = path.resolve(__dirname, `../${f}`);
    const filename = f
        .replace(/(^source\/)|((index)?\.specs?\.js$)/g, '')
        .replace(/\//g, '-');

    e[filename] = filepath;
    return e;
}, {});


webpackConfig.target = 'node';
webpackConfig.entry = entries;
webpackConfig.output.path = `${webpackConfig.output.path}/tests`;
webpackConfig.output.filename = '[name].specs.js';
webpackConfig.module.loaders = getCommonLoaders({ tests });
webpackConfig.plugins = getCommonPlugins({ tests });
webpackConfig.externals = [nodeExternals()];

module.exports = webpackConfig;
