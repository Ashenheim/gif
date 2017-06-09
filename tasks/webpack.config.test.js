const glob = require('glob');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const getCommonLoaders = require('./webpack.common-loaders');
const getCommonPlugins = require('./webpack.common-plugins');
const webpackConfig = require('./webpack.config');

const config = Object.assign({}, webpackConfig);
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


config.target = 'node';
config.entry = entries;
config.output.path = `${config.output.path}/tests`;
config.output.filename = '[name].specs.js';
config.module.loaders = getCommonLoaders({ tests });
config.plugins = getCommonPlugins({ tests });
config.externals = [nodeExternals()];

module.exports = config;
