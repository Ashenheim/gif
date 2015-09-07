function imageOnLoadDirective() {
    function link(scope, element, attrs) {
        // var $element = element.parent('.gif');
        // $element.addClass('image-not-loaded');
        // element.on('load', function() {
        //
        //     $element
        //         .removeClass('image-not-loaded')
        //         .addClass('image-is-loaded');
        //
        // });
    }
    return {
        restrict: 'A',
        link: link
    };
}
