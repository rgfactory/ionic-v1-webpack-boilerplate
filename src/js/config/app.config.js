function config($urlRouterProvider, $ionicConfigProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/home');

    // $ionicConfigProvider.views.swipeBackEnabled(false);
}

export default config;