const bs = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./config');
const { log } = require('./orchestrator');
const { createConfig, createBundler } = require('./webpack');


const startServer = () => new Promise((resolve) => {
    const webpackConfig = createConfig();
    const bundler = createBundler(webpackConfig);
    const server = bs.init({
        open: config.open,
        port: config.port,
        logLevel: false,
        middleware: [
            webpackDevMiddleware(bundler),
        ]
    }, (err, { options }) => {
        const port = options.get('port');
        log('browser-sync', `running at http://localhost:${port}`);
        resolve();
    });
});

module.exports = { startServer };
