function gifBlockDir($timeout) {
    function link(scope,element,attrs) {

        var image = element.find('img');
        var container = element.parent('.gif__container');

        image.imagesLoaded(function() {
            element
                .removeClass('image-not-loaded')
                .addClass('image-is-loaded');
        });

    }

    return {
        restrict: 'E',
        link: link,
        templateUrl: 'app/templates/gif-item.tpl.html',
        replace: true
    };
}
