import serverRoutes from './../config/serverRoutes'
class Requester {
    constructor($http, $ionicPopup, $ionicLoading) {
        'ngInject';

        this._$http = $http;
        this._$ionicPopup = $ionicPopup;
        this._$ionicLoading = $ionicLoading;
    }

    request(routeName) {

        let config = serverRoutes[routeName];
        let $httpPromise = null;

        return this._$ionicLoading.show()

            .then(() => {
                console.log('show() resolved execution');
                $httpPromise = this._$http(config);
                return this._$ionicLoading.hide();
            })

            .then( () => {
                console.log('hide() resolved function');
                return $httpPromise; // process serverCallbacks promise AFTER $ionicLoading is hidden !
            })

            .then(
                response => {
                    this._$ionicLoading.hide();
                    console.log('$http() resolved execution');
                    return response.data;
                },
                error => {
                    this._$ionicLoading.hide();
                    console.log('$http() rejected execution');
                    this.setDefaultPopup(config.defaultPopup, error);
                }
            );
    }

    setDefaultPopup(defaultPopup, error) {

        //TODO: display the default popup or not, depending on the error returned by the server

        if (defaultPopup) {
            this._$ionicPopup.alert({
                title: 'Damn it',
                template: 'Something went wrong. Please try it later.'
            });
        }
        else throw error; // triggers the next errorCallback
    }
}

export default Requester;