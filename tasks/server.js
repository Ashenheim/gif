const bs = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { webpackConfig, createWebpackConfigWithHot } = require('./webpack');


const runServer = () => {
    const bundler = webpack(createWebpackConfigWithHot(webpackConfig));

    const config = {
        server: 'build',
        open: false,
        middleware: [
            webpackDevMiddleware(bundler, {
                noInfo: true,
                reload: true,
                stats: { chunks: false, colors: true },
            }),
            webpackHotMiddleware(bundler),
        ],
    };

    bs(config);
};

module.exports = {
    runServer,
};
