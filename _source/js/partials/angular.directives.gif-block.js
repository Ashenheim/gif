function gifBlockDir($timeout) {
    function link(scope,element,attrs) {

        var image = element.find('img');
        var container = element.parent('.gif__container');

        image.imagesLoaded(function() {
            console.log('image fully loaded');
            element
                .removeClass('image-not-loaded')
                .addClass('image-is-loaded');
        });

        element.bind('click', function() {
            var imageUrl = window.location.href + (element.attr('data-image')).substring(1);
            window.prompt("Copy to clipboard: Ctrl+C, Enter", imageUrl);
        });
    }

    return {
        restrict: 'E',
        link: link,
        templateUrl: 'app/templates/gif-item.html',
        replace: true
    };
}
