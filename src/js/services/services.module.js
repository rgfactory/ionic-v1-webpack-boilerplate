import Requester from './requester.service';

const servicesModule = angular.module('app.services', []);

servicesModule.service('requester', Requester);

export default servicesModule;