import message from './message/message.component';

const componentsModule = angular.module('app.components', []);

// Angular directives and components require camelCase name definitions.
// https://stackoverflow.com/questions/17990864/angular-directive-name-only-lower-case-letters-allowed

componentsModule.component('message', message);

export default componentsModule;