const glob = require('glob');
const path = require('path');
const webpackConfig = require('./webpack-config');


const testFiles = glob.sync('source/**/*.specs.js');
const entries = testFiles.reduce((e, p) => {
    const filename = p
                    .replace(/(source\/)|((index)?.specs.js)/gi, '')
                    .replace(/\//g, '-');
    const filepath = path.resolve(__dirname, `../${p}`)
    e[filename] = filepath;

    return e;
}, {});
console.log(JSON.stringify(entries, null, 2));



module.exports = webpackConfig;