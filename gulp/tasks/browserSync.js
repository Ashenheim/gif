/* ====================================
    browserSync
    -----------

    Runs server and reloads automatically.
    Default location at:
        - http://localhost:3000
        - http://localhost:3001 (settings)

==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    config       = require('../config');


/*
    Tasks & Functions
------------------------------------ */

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: config.build
        },
        host: "localhost",
        port: 8080,
        online: false,
        open: false,
        notify: {
            styles: [
                'color: rgb(255, 255, 255)',
                'position: fixed',
                'z-index: 999999',
                'bottom: 0px',
                'left: 0px',
                'font-size: 1em',
                'background: rgba(0, 0, 0, 0.8)',
                'font-family: arial, sans-serif',
                'padding: 10px',
                'box-shadow: 0 0 5px rgba(0,0,0,.3)'
            ]
        }
    });
});
