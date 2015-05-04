/* ====================================
    browserSync
    -----------

    Runs server and reloads automatically.
    Default location at:
        - http://localhost:3000
        - http://localhost:3001 (settings)

==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    config       = require('../config').browserSync;


/*
    Tasks & Functions
------------------------------------ */

gulp.task('browserSync', function () {
    browserSync( config );
});