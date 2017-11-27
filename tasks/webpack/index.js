const webpack = require('webpack');
const createConfig = require('./create-config');


const createBundler = (webpackConfig) => webpack(webpackConfig);


module.exports = {
    createBundler,
    createConfig,
};
