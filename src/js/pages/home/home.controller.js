class HomeCtrl {

    constructor($scope, $state, requester, $ionicPopup) {
        'ngInject';
        this._$scope = $scope;
        this._$state = $state;
        this._requester = requester;
        this._$ionicPopup = $ionicPopup;

        $scope.$on("$ionicView.enter", () => {
            this.todos = this._requester.request('todos')
                .then(
                    data => {
                        console.log('request() resolved execution');
                        console.log(data);
                    },
                    error => {
                        console.log('request() rejected execution');
                        this._$ionicPopup.alert({
                            title: 'Whoops',
                            template: "the todos list is not available"
                        });
                    });
        });

        this.firstMessage = {
            title: 'A simply message component',
            body: 'In Angular, a Component is a special kind of directive that uses a simpler configuration which is suitable for a component-based application structure.'+
                'This makes it easier to write an app in a way that\'s similar to using Web Components or using Angular 2+\'s style of application architecture.'
        };

        this.secondMessage = {
            title: 'this is fake',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
                'when an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
                ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
    }
}

export default HomeCtrl;