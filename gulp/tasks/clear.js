/* ====================================
    Clear
    -----

    Destroys compiled folders for
    cleaning purposses.
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    clean        = require('gulp-clean'),
    config       = require('../config').clear;


/*
    Tasks & Functions
------------------------------------ */

gulp.task('clear', function() {
    return gulp.src( config, {read: false} )
        .pipe(clean());
});