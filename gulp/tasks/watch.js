/* ====================================
    Watch
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    config       = require('../config');


/*
    Tasks & Functions
------------------------------------ */

gulp.task('watch',function() {
    gulp.watch( config.Jekyll.src, ['jekyll-rebuild']);
    gulp.watch( config.Sass.src,   ['styles']);
    gulp.watch( config.Scripts.src,['scripts']);
});