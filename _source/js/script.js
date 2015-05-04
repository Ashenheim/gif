$("html")
    .removeClass('no-js')
    .addClass('js');

$(document).ready(function() {

    /* ------------------------------
        Initiations
    ------------------------------ */

    var $gifItem = '.gif-item';

    var $msnry = $('.gif-item__container').masonry({
        itemSelector: $gifItem
    });

    $msnry.imagesLoaded( function() {
        $msnry.masonry();
    });

    $($gifItem).each(function($i) {
        var self = $(this);
        var $i = $i++;
        var $time = 150;

        setTimeout(function() {
            self.addClass('animate-in');
        }, $time * $i);
    });

    /* ------------------------------
        Events
    ------------------------------ */


});
