/* ====================================
    Configuration file
==================================== */


var paths = {
    bower : "./bower_components/",
    
    dest  : "build/",
    assets: "build/assets/",

    sass  : "_source/sass/",
    js    : "_source/js/",
    media : "_source/media/",
    jade  : "_source/jade/",
    yaml  : "_source/yaml/",
    copy  : "_source/copy/"
}


/*
    Task settings
------------------------------------ */

module.exports = {

    /* ------------------------------
        Jade
    ------------------------------ */

    jade: {
        src: [
            paths.jade + '**/*.jade',
            paths.jade + '*.jade',
            '!' + paths.jade + 'partials/*.jade',
            '!' + paths.jade + 'layouts/*.jade'
        ],
        dest: paths.dest,
        watch: paths.jade + '**/*.jade'
    },

    /* ------------------------------
        Sass
    ------------------------------ */
    Sass: {
        src: [
            paths.sass + "*.{sass,scss}",
            paths.sass + "**/*.{sass,scss}"
        ],
        dest: paths.assets + "css/",
        settings: {
            style: 'compressed',
            errLogToConsole: true
        },
        autoprefixer: [
            'last 2 versions',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ]
    },

    yaml: {
        src: [
            paths.yaml + '*.yml',
            paths.yaml + '**/*.yml'
        ],
        dest: paths.dest
    },

    /* ------------------------------
        Javascript
    ------------------------------ */
    Scripts: {
        src: [
            paths.bower + '/jquery/dist/jquery.js',
            paths.bower + '/angular/angular.js',
            paths.bower + '/isotope/dist/isotope.pkgd.js',
            paths.bower + '/imagesloaded/imagesloaded.pkgd.js',
            paths.js + '/vendors/**/*.js',
            paths.js + '/partials/**/*.js',
            paths.js + '/script.js'
        ],
        dest: paths.assets + "js/",
        uglify: { mangle: false }
    },

    /* ------------------------------
        Media
    ------------------------------ */
    Media: {
        images: {
            src: paths.media + "*.{jpg,gif,png,svg}"
        },
        svg: {
            src: paths.media + "*.svg"
        },
        dest: paths.assets + "media/"
    },

    copy: {
        src: paths.copy + '**/*',
        dest: paths.dest
    },

    /* ------------------------------
        BrowserSync
    ------------------------------ */
    browserSync: {
        server: {
            baseDir: paths.dest
        },
        host: "localhost",
        open: false,
        port: 8080,
        online: false
    },
}
