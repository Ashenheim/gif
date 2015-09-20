function mainController($scope, $http, $timeout, $state, $window) {

    /* Settings */

    /* ------------------------------------
        JSON request
    ------------------------------------ */

    $scope.gifs = GIFS;

    /* ------------------------------------
        Search Timeout

        Adds a small delay to the search
        for smoother performance
    ------------------------------------ */

    var queryTimeOutTime = 400,
        queryFilterText = '',
        queryTextTimout;

    $scope.queryResults = '';

    function filterSearch(val) {
        if (queryTextTimout) $timeout.cancel(queryTextTimout);

        queryFilterText = val;

        queryTextTimout = $timeout(function() {
            $scope.queryResults = queryFilterText;
        }, queryTimeOutTime);

    };

    $scope.filterSearch = function(val) {
        filterSearch(val)
    };

    // console.log($scope.query);

    /* ------------------------------------
        Watch
    ------------------------------------ */

    $scope.$watch('query', function (val) {
        filterSearch(val);
    });

    $(document).on('keyup', function(e) {
        if(e.keyCode == 27) {
            $state.go('/')
        }
    });

}
