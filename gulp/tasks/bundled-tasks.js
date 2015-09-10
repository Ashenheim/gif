/* ====================================
    Bundled tasks
    -----

    Here are the tasks that compile
    together. Uses runSequence to
    let certain tasks run first before
    another can start.
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    ghPages      = require('gulp-gh-pages'),
    config       = require('../config');


/*
    Tasks & Functions
------------------------------------ */

// gulp build
gulp.task('build', [ 'jade', 'yaml', 'scripts', 'styles', 'media', 'copy' ]);
gulp.task('serve', ['browser-sync', 'watch']);

gulp.task('deploy', ['build'], function() {
    return gulp.src(config.build)
        .pipe(ghPages());
});

gulp.task('default', [ 'build', 'serve' ]);
