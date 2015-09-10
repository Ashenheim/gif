/* ====================================
    YAML
    ----

    Plugins & Variables
==================================== */

var gulp        = require('gulp');
var yaml        = require('gulp-yaml');
var config      = require('../config.js').yaml;

/*
    Tasks & Functions
------------------------------------ */

// gulp build
gulp.task('yaml', function() {
    gulp.src(config.src)
        .pipe(yaml())
        .pipe(gulp.dest(config.dest));
});
