
var app = angular.module("MyApp", ['wu.masonry']);

app.controller("Search", function($scope, $http, $timeout) {

    /* ------------------------------------
        JSON request
    ------------------------------------ */

    $http.get('all-gifs.json')
        .then( function( results ) {

            var $json    = results.data.posts;
            var $length  = $json.length;
            var $results = $json.splice(0,$length); // Removes last empty entry

            $results.forEach(function(item) {
                item.randomVal = $scope.random();
            });

            $scope.gifs = $results;

        });

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

    $scope.$watch('query', function (val) {

        if (queryTextTimout) $timeout.cancel(queryTextTimout);

        queryFilterText = val;

        queryTextTimout = $timeout(function() {
            $scope.queryResults = queryFilterText;
        }, queryTimeOutTime);

    });

    /* ------------------------------------
        Random number sort
    ------------------------------------ */

    $scope.random = function(){
        return 0.5 - Math.random();
    };

});
