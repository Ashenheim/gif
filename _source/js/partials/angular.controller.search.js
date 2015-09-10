function searchController($scope, $http, $timeout) {

    /* Settings */

    /* ------------------------------------
        JSON request
    ------------------------------------ */

    $scope.fetchScope = function() {
        $http.get('app/data/gifs.json')
            .then( function( results ) {

                var $json    = results.data;
                $scope.gifs = $json;

                for(var i=0;i<$json.length;i++) {
                    $json[i].name  = $json[i].image.split('/')[0];
                    $json[i].cat   = $json[i].image.split('/')[1];
                    $json[i].image = '/i/' + $json[i].image;
                }

            });
    };

    $scope.fetchScope();

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

}
