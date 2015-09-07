$("html")
    .removeClass('no-js')
    .addClass('js');

angular
    .module("searchApp", ['wu.masonry'])
    .controller('Search', searchController)
    .directive('imageonload', imageOnLoadDirective)
    .directive('gifBlock', gifBlockDir);

$(document).ready(function() {

    /* ------------------------------
        Initiations
    ------------------------------ */

    var $gifs = $('.gif__container');
    var $gifLink = $('.gif-item a');

    $gifs.delegate('.gif-item a', 'hover', function(event) {
        event.preventDefault();
        console.log("Hovers gif");
    })

    /* ------------------------------
        Events
    ------------------------------ */

});
