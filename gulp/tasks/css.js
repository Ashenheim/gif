/* ====================================
    Sass
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp            = require('gulp'),
    stylus          = require('gulp-stylus'),
    nib             = require('nib'),
    rupture         = require('rupture'),
    postcss         = require('gulp-postcss'),
    autoprefixer    = require('autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps'),
    browserSync     = require('browser-sync'),
    plumber         = require('gulp-plumber'),
    config          = require('../config').style;


/*
    Tasks & Functions
------------------------------------ */

// Error handler
var onError = function (err) {
    var errorMessage =
        '<pre><code>' + err.message + '</code></pre>';

    console.log(err);
    browserSync.notify(errorMessage);
    this.emit('end');
};


gulp.task('stylus', function() {
    browserSync.notify('<span style="color: grey">Running:</span> Stylus compiling');
    return gulp.src( config.src )
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
            // sourcemaps starts
            .pipe(stylus({
                use: [ nib(), rupture() ]
            }))
            .pipe(postcss([
                autoprefixer()
            ]))
            // sourcemaps ends
        .pipe(sourcemaps.write('../maps', {
            includeContent: false,
            sourceRoot: '../../_source/sass'
        }))
        .pipe(gulp.dest( config.dest ))
        .pipe( browserSync.stream({match: "**/*.css"}) );
});
