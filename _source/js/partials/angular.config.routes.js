function routesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/'
        })
        .state('gif', {
            url: '/:name',
            views: {
                'overlay': {
                    templateUrl: 'app/templates/gif-state.tpl.html',
                    controller: "gif"
                }
            }
        })
}
