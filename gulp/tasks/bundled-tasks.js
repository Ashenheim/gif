/* ====================================
    Bundled tasks
    -----

    Here are the tasks that compile
    together. Uses runSequence to
    let certain tasks run first before
    another can start.
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    runSequence  = require('run-sequence'),
    config       = require('../config').fonts;


/*
    Tasks & Functions
------------------------------------ */

// gulp build
gulp.task('build', function(callback) {
    runSequence(
        'clear',
        'jekyll:dev',
        [ 'scripts', 'styles', 'media' ]
    )
});

gulp.task('build:dist', function(callback) {
    runSequence(
        'clear',
        'jekyll:dist',
        [ 'scripts', 'styles', 'media' ]
    )
});

// gulp server
gulp.task('server', ['browserSync', 'watch']);
gulp.task('serve', ['server']);

// gulp (default)
gulp.task('default', function(callback) {
    runSequence(
        'clear',
        'jekyll:dev',
        [ 'scripts', 'styles', 'media' ],
        ['browserSync', 'watch']
    )
});
