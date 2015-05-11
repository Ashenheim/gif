var app = angular.module("MyApp", ['wu.masonry']);

    app.controller("Search", function($scope, $http, $timeout) {

        $http.get('all-gifs.json')
            .then( function( results ) {
                var $json    = results.data.posts;
                var $length  = $json.length - 1;

                var $results = $json.splice(0,$length);

                $scope.gifs = $results;

                console.log( $results.length );
            });

        $scope.filterFunction = function(element) {
            return element.name.match(/^Ma/) ? true : false;
        };

        $scope.queryResults = '';

        var queryFilterText = '',
            queryTextTimout;

        $scope.$watch('query', function (val) {

            if (queryTextTimout) $timeout.cancel(queryTextTimout);

            queryFilterText = val;

            queryTextTimout = $timeout(function() {
                $scope.queryResults = queryFilterText;
            }, 250); // delay 250 ms

        });

    });
