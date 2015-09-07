function gifBlockDir() {

    return {
        restrict: 'A',
        link: function(scope,element,attrs) {

            var image = element.find('img');
            image.on('load', function() {
                element
                    .removeClass('image-not-loaded')
                    .addClass('image-is-loaded');
            });
            element.on('click', function() {
                var imageUrl = element.attr('data-image');
                console.log(imageUrl);
                window.prompt("Copy to clipboard: Ctrl+C, Enter", imageUrl);
            });
        }
    };
}
