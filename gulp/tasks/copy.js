/* ====================================
    Copy files
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    config       = require('../config').copy;


/*
    Tasks & Functions
------------------------------------ */

gulp.task('copy', function() {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest))
})
