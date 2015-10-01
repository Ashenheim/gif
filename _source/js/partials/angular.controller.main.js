function mainController($scope, $http, $timeout, $state, $window) {

    /* Settings */

    /* ------------------------------------
        JSON request
    ------------------------------------ */

    $scope.gifs = GIFS;
    $scope.categories = CATS;

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
            $scope.query = val;
        }, queryTimeOutTime);

    };

    $scope.filterSearch = function(val) {
        $state.go('/')
        filterSearch(val);
    };

    $scope.submit = function() {
        $state.go('/')
        filterSearch($scope.query);
    }

    // console.log($scope.query);

    /* ------------------------------------
        Watch
    ------------------------------------ */

    $(document).on('keyup', function(e) {
        if(e.keyCode == 27) {
            $state.go('/')
        }
    });

}
