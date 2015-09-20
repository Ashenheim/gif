(function() {

    angular
        .module("myApp", ['ui.router'])
        .config(routesConfig)
        .controller('Search', mainController)
        .controller('gif', gifController)
        .directive('gifblock', gifBlockDir);

    fetchData().then(bootstrapApp);

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");
        return $http.get('app/data/gifs.json').success(function(data) {

            var allCatNames = [],
                catNames = [];

            $.each(data, function(i, el){
                el.name  = el.image.split('/')[1].split('.gif')[0];
                el.cat   = el.image.split('/')[0];
                el.image = '/i/' + el.image;
                el.rank = ((Math.random()*6));

                allCatNames.push(el.cat);
            });

            $.each(allCatNames, function(i, el){
                if($.inArray(el, catNames) === -1) {
                    catNames.push(el)
                };
            });

            return [
                GIFS = data,
                CATS = catNames
            ];
        });
    }

    function bootstrapApp() {
        return angular.element(document).ready(function() {
            angular.bootstrap(document, ['myApp']);
        });
    }


})();
