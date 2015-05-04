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
    svgstore     = require('gulp-svgstore'),
    svgmin       = require('gulp-svgmin'),
    rename       = require('gulp-rename'),
    config       = require('../config').Media;


/*
    Tasks & Functions
------------------------------------ */

gulp.task('media', function() {
    gulp
        .src( config.svg.src )
        .pipe(svgmin({
            plugins: [
                { removeViewBox: false },
                { removeUselessStrokeAndFill: false }
            ]
        }))
        .pipe(gulp.dest( config.dest[0] ))
        .pipe(gulp.dest( config.dest[1] ))
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgstore())
        .pipe(gulp.dest( "./" ))
});
