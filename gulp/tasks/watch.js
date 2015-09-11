/* ====================================
    Watch
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    runSequence = require('run-sequence'),
    config      = require('../config');


/*
    Tasks & Functions
------------------------------------ */

gulp.task('watch',function() {
    watch( config.jade.watch, function(event) {
        gulp.start('jade');
    });
    watch( config.style.watch, function(event) {
        gulp.start('stylus');
    });
    watch( config.scripts.src, function(event) {
        gulp.start('scripts');
    });
    watch( config.yaml.src, function(event) {
        gulp.start('yaml');
    });
    watch( config.copy.src, function(event) {
        gulp.start('copy');
    });
});
