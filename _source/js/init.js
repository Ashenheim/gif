$("html")
    .removeClass('no-js')
    .addClass('js');

(function() {

    angular
        .module("searchApp", ['ui.router'])
        .controller('Search', searchController)
        .directive('gifblock', gifBlockDir);

    fetchData().then(bootstrapApp);

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");
        return $http.get('app/data/gifs.json').success(function(data) {

            for(var i=0;i<data.length;i++) {
                data[i].name  = data[i].image.split('/')[0];
                data[i].cat   = data[i].image.split('/')[1];
                data[i].image = '/i/' + data[i].image;
            }

            return [
                GIFS = data
            ];
        });
    }

    function bootstrapApp() {
        return angular.element(document).ready(function() {
            angular.bootstrap(document, ['searchApp']);
        });
    }

})();
