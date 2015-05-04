/* ====================================
    Scripts
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    plumber      = require('gulp-plumber'),
    browserSync  = require('browser-sync'),
    config       = require('../config').Scripts;


/*
    Tasks & Functions
------------------------------------ */

gulp.task('scripts', function() {
    browserSync.notify('<span style="color: yellow">Running:</span> Javascript compiling');
    return gulp.src( config.src )
        .pipe(plumber())
        .pipe(concat('global.js'))
        .pipe(gulp.dest( config.dest.one ))
        .pipe(gulp.dest( config.dest.two ))
        .pipe(rename('global.min.js'))
        .pipe(uglify( config.uglify ))
        .pipe(gulp.dest( config.dest.one ))
        .pipe(gulp.dest( config.dest.two ))
        .pipe( browserSync.reload({stream:true}) );
});