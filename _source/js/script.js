$("html")
    .removeClass('no-js')
    .addClass('js');

angular
    .module("searchApp", [])
    .controller('Search', searchController)
    .directive('gifblock', gifBlockDir);

$(document).ready(function() {

    /* ------------------------------
        Initiations
    ------------------------------ */

    var $gifs = $('.gif__container');
    var $gifLink = $('.gif-item a');

    /* ------------------------------
        Events
    ------------------------------ */

});
