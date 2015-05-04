/* ====================================
    Sass
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    prefix       = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    browserSync  = require('browser-sync'),
    plumber      = require('gulp-plumber'),
    config       = require('../config').Sass;


/*
    Tasks & Functions
------------------------------------ */

gulp.task('styles', function() {
    browserSync.notify('<span style="color: grey">Running:</span> Sass compiling');
    return gulp.src( config.src )
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass( config.settings )) 
        .pipe(prefix( config.autoprefixer ))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/'}))
        .pipe(gulp.dest( config.dest.one ))
        .pipe(gulp.dest( config.dest.two ))
        .pipe( browserSync.reload({stream:true}) );
});