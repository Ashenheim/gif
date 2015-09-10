/* ====================================
    Jade
==================================== */
var gulp =  require('gulp');
var jade =  require('gulp-jade');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var config = require('../config.js').jade;

/*
    Tasks & Functions
------------------------------------ */

gulp.task('jade', function() {
    return gulp.src( config.src )
    .pipe(plumber())
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest( config.dest ))
    .pipe( browserSync.reload({stream:true}) );
});
