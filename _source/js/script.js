$("html")
    .removeClass('no-js')
    .addClass('js');

$(document).ready(function() {

    /* ------------------------------
        Initiations
    ------------------------------ */

    var $msnry = $('.gif-item__container').masonry({
        itemSelector: '.gif-item'
    });

    $msnry.imagesLoaded( function() {
        $msnry.masonry();
    });

    /* ------------------------------
        Events
    ------------------------------ */


});
