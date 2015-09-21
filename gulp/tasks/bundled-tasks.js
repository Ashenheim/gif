/* ====================================
    Clean
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp        = require('gulp'),
    ghPages     = require('gulp-gh-pages'),
    clean       = require('gulp-clean'),
    runSequence = require('run-sequence'),
    config      = require('../config');


/*
    Tasks & Functions
------------------------------------ */

gulp.task('clean', function() {
    return gulp.src(config.build)
        .pipe(clean());
});

gulp.task('deploy', function() {
    return gulp.src(config.build + '**/*')
        .pipe(ghPages());
});


gulp.task('dist', function() {
    runSequence(
        'clean',
        'build',
        ['scripts:dist']
    )
});

// gulp build
gulp.task('build', [ 'jade', 'yaml', 'scripts', 'stylus', 'media', 'copy' ]);
gulp.task('serve', ['browser-sync', 'watch']);
gulp.task('default', [ 'build', 'serve' ]);
