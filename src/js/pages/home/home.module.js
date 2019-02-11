import config from './home.config';
import HomeCtrl from './home.controller'

const homeModule = angular.module('app.home', []);

homeModule.config(config);
homeModule.controller('HomeCtrl', HomeCtrl);