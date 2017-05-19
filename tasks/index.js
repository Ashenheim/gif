const gulp = require('gulp');
const { webpackCompile, webpackTestCompile } = require('./webpack');
const { runServer } = require('./server');


const build = gulp.series(webpackCompile);
const serve = gulp.series(runServer);
const test = gulp.series(webpackTestCompile);


module.exports = {
    build,
    serve,
    test,
};
