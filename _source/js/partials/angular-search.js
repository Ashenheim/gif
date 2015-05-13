
var app = angular.module("MyApp", ['wu.masonry','angular.filter']);

app.controller("Search", function($scope, $http, $timeout) {

    /* ------------------------------------
        JSON request
    ------------------------------------ */

    $scope.fetchScope = function() {
        $http.get('all-gifs.json')
            .then( function( results ) {

                var $json    = results.data;
                var $length  = $json.gifs.length;
                var $results = $json.gifs.splice(0,$length); // Removes last empty entry

                $results.forEach(function(item) {
                    item.randomVal = $scope.random();
                });

                $scope.gifs = $results;
                $scope.categories = $json.categories;

            });
    };

    $scope.fetchScope();

    $scope.clickOnUpload = function () {
        console.log("Refresh");
    };

    /* ------------------------------------
        Search filter
    ------------------------------------ */

    $scope.filterFunction = function(element) {
        return element.name.match(/^Ma/) ? true : false;
    };

    /* ------------------------------------
        Search Timeout

        Adds a small delay to the search
        for smoother performance
    ------------------------------------ */

    var queryTimeOutTime = 400,
        queryFilterText = '',
        queryTextTimout;

    $scope.queryResults = '';

    $scope.filterSearch = function (val) {
        if (queryTextTimout) $timeout.cancel(queryTextTimout);

        queryFilterText = val;

        queryTextTimout = $timeout(function() {
            $scope.queryResults = queryFilterText;

        }, queryTimeOutTime);

    };

    $scope.queryFind = function (val) {
        $scope.query = val;
    };

    /* ------------------------------------
        Watch
    ------------------------------------ */

    $scope.$watch('query', function (val) {
        $scope.filterSearch( val );
    });

    $scope.$watch('querySelect', function (val) {
        $scope.query = val;
    });

    /* ------------------------------------
        Random number sort
    ------------------------------------ */

    $scope.random = function(){
        return 0.5 - Math.random();
    };

});


app.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var _parent = element.parent('.gif');
            _parent.addClass('image-not-loaded');
            element.bind('load', function() {

                _parent
                    .removeClass('image-not-loaded')
                    .addClass('image-is-loaded');

                console.log(element.attr("src"));

            });
        }
    };
});
