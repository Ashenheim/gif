/* ====================================
    Watch
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    runSequence  = require('run-sequence'),
    config       = require('../config');


/*
    Tasks & Functions
------------------------------------ */

gulp.task('watch',function() {
    gulp.watch( config.Jekyll.src, ['jekyll-rebuild']);
    gulp.watch( config.Sass.src,   ['styles']);
    gulp.watch( config.Scripts.src,['scripts']);
    gulp.watch( config.Media.svg.src, function() {
        runSequence(
            'media',
            'jekyll-rebuild'
        )
    });
});
