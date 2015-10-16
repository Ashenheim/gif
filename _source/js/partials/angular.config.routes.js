function routesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            containerClass: 'home is-exiting'
        })
        .state('gif', {
            url: '/:name',
            containerClass: 'gif',
            views: {
                'overlay': {
                    templateUrl: 'app/templates/gif-state.tpl.html',
                    controller: "gif"
                }
            }
        })
}
