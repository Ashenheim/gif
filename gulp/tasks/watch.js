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
    gulp.watch( config.jade.watch, ['jade']);
    gulp.watch( config.Sass.src, ['styles']);
    gulp.watch( config.Scripts.src, ['scripts']);
    gulp.watch( config.yaml.src, ['yaml']);
    gulp.watch( config.copy.src, ['copy']);
});
