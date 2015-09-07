function gifBlockDir() {
    function link(scope,element,attrs) {

        var image = element.find('img');
        image.on('load', function() {
            element
                .removeClass('image-not-loaded')
                .addClass('image-is-loaded');
        });

        element.on('click', function() {
            var imageUrl = (window.location.href.split('#')[0]) + (element.attr('data-image'));
            window.prompt("Copy to clipboard: Ctrl+C, Enter", imageUrl);
        });
    }

    return {
        restrict: 'A',
        link: link
    };
}
