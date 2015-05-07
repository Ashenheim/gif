angular.module("MyApp", ['wu.masonry'])

    .controller("MyCtrl", function($scope, $http) {

        $http.get('all-gifs.json')
            .then( function( results ) {
                $scope.gifs = results.data.posts;
            });

        $scope.filterFunction = function(element) {
            return element.name.match(/^Ma/) ? true : false;
        };

    });
