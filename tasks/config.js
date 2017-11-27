const { argv } = require('yargs');


const config = {
    open: argv.open || false,
    port: argv.port || 1337,
    production: argv.production || false,
};

module.exports = config;
