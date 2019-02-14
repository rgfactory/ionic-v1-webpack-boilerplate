class HomeCtrl {

    constructor($scope, $state) {
        'ngInject';
        this._$scope = $scope;
        this._$state = $state;

        this.firstMessage = {
            title: 'this is the title',
            body: 'Here comes the body'
        }
    }
}

export default HomeCtrl;