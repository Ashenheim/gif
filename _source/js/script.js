$("html")
    .removeClass('no-js')
    .addClass('js');

angular
    .module("searchApp", [])
    .controller('Search', searchController)
    .directive('gifBlock', gifBlockDir)
    .directive('isotope', isotopeDir);

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
