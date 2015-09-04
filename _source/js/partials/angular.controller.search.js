function searchController($scope, $http, $timeout) {

    /* Settings */
    $scope.settings = 15;

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
