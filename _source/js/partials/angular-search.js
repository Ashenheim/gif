var app = angular.module("MyApp", ['wu.masonry']);

    app.controller("MyCtrl", function($scope, $http) {

        $http.get('all-gifs.json')
            .then( function( results ) {
                $scope.gifs = results.data.posts;
            });

        $scope.filterFunction = function(element) {
            return element.name.match(/^Ma/) ? true : false;
        };

    });
