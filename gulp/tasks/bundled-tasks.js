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
    config       = require('../config').fonts;


/*
    Tasks & Functions
------------------------------------ */

// gulp build
gulp.task('build', [ 'jade', 'yaml', 'scripts', 'styles', 'media', 'copy' ]);
gulp.task('serve', ['browserSync', 'watch']);

gulp.task('default', [ 'build', 'serve' ]);
