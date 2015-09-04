/* ====================================
    Jekyll
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    cp           = require('child_process'),
    browserSync  = require('browser-sync'),
    runSequence  = require('run-sequence'),
    config       = require('../config').Jekyll;


var jekyllPrompt = process.platform === "win32" ? "jekyll.bat" : "jekyll";


/*
    Tasks & Functions
------------------------------------ */

gulp.task('jekyll:dist', function (done) {
    return cp.spawn( jekyllPrompt , ['build', '-d' + config.dest ], {stdio: 'inherit'})
        .on('close', done);
});


gulp.task('jekyll:dev', function (done) {
    browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build');
    return cp.spawn( jekyllPrompt , ['build', '-d' + config.dest, '--config=_config.yml,_config.dev.yml' ], {stdio: 'inherit'})
        .on('close', done);
});


gulp.task('jekyll:rebuild', function() {
    runSequence(['jekyll:dev'], function() {
        browserSync.reload();
    });
});
