class HomeCtrl {

    constructor($scope, $state, requester, $ionicPopup) {
        'ngInject';
        this._$scope = $scope;
        this._$state = $state;
        this._requester = requester;
        this._$ionicPopup = $ionicPopup;

        this.todos = null;

        this._requester.request('todos')
            .then(
                data => {
                    console.log('request() resolved execution');
                    this.todos = data;
                },
                error => {
                    console.log('request() rejected execution');
                    this._$ionicPopup.alert({
                        title: 'Whoops',
                        template: "the todos list is not available"
                    });
                }
            );
    }
}

export default HomeCtrl;