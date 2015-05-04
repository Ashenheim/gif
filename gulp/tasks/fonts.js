/* ====================================
    Fonts
    -----

    Copy over all fonts to
    Assets folder.
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    config       = require('../config').fonts;


/*
    Tasks & Functions
------------------------------------ */

gulp.task('fonts', function() {
    gulp.src( config.src )
        .pipe(gulp.dest( config.dest.one ))
        .pipe(gulp.dest( config.dest.two ));
});