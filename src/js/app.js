// Ionic Starter App

import '../scss/ionic.app.scss'; // Include all of ionic
import '../scss/global.scss';
import './components/message/message.scss';

import './../lib/ionic/js/ionic.bundle';

import config from './config/app.config';
import run from './config/app.run';

import './pages/home/home.module';

import './components/components.module';

let requires = [
  'ionic',
  'app.home',
  'app.components'
];

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', requires).run(run).config(config);
