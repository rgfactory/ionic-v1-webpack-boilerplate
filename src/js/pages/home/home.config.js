function home($stateProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/home',
            template: require("./home.html"),
            controller: 'HomeCtrl',
            controllerAs: '$ctrl'
        });

}

export default home;