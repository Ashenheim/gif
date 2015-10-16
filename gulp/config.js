/* ====================================
    Configuration file
==================================== */


var paths = {
    bower : "./bower_components/",

    dest  : "build/",
    assets: "build/assets/",

    sass  : "_source/sass/",
    stylus: "_source/stylus/",
    js    : "_source/js/",
    media : "_source/media/",
    markup: "_source/markup/",
    yaml  : "_source/yaml/"
}


/*
    Task settings
------------------------------------ */

module.exports = {

    build: paths.dest,

    copy: {
        src: [
            paths.markup + '**/*',
            '!' + paths.markup + '**/*.{jade,yml}',
            '!' + paths.markup + '{_partials,_partials/**}',
            '!' + paths.markup + '{_layouts,_layouts/**}'
        ],
        dest: paths.dest
    },

    /* ------------------------------
        Jade
    ------------------------------ */

    jade: {
        src: [
            paths.markup + '**/*.jade',
            paths.markup + '*.jade',
            '!' + paths.markup + '{_partials,_partials/**}',
            '!' + paths.markup + '{_layouts,_layouts/**}'
        ],
        dest: paths.dest,
        watch: [
            paths.markup + '*.jade',
            paths.markup + '**/*.jade'
        ]
    },

    /* ------------------------------
        Style
    ------------------------------ */
    style: {
        src: paths.stylus + "global.styl",
        dest: paths.assets + "css/",
        watch: [
            paths.stylus + "*.styl",
            paths.stylus + "**/*.styl"
        ]
    },

    yaml: {
        src: [
            paths.markup + '*.yml',
            paths.markup + '**/*.yml'
        ],
        dest: paths.dest
    },

    /* ------------------------------
        Javascript
    ------------------------------ */
    scripts: {
        src: [
            paths.bower + '/jquery/dist/jquery.min.js',
            paths.bower + '/angular/angular.min.js',
            paths.bower + '/angular-ui-router/release/angular-ui-router.min.js',
            paths.bower + '/isotope/dist/isotope.pkgd.js',
            paths.bower + '/imagesloaded/imagesloaded.pkgd.js',
            paths.js + '/vendors/*.js',
            paths.js + '/partials/*.js',
            paths.js + '/init.js'
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
    }
}
