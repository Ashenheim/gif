function isotopeDir($timeout) {

    var link = function(scope,element,attrs) {
        // $timeout(function() {
        //     element.imagesLoaded(function() {
        //
        //         var iso = element.isotope({
        //             itemSelector: '.gif-block'
        //         });
        //         iso.isotope('layout');
        //     });
        // });
        //
        // scope.$watch('isotopeWatch', function() {
        //     element.imagesLoaded(function() {
        //
        //         var iso = element.isotope({
        //             itemSelector: '.gif-block'
        //         });
        //         iso.isotope('layout');
        //     });
        // })
    }

    return {
        restrict: 'A',
        scope: {
            isotopeWatch: '='
        },
        link: link
    }
}
