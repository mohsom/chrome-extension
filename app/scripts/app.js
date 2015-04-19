'use strict';

/**
 * @ngdoc overview
 * @name chromeExtensionApp
 * @description
 * # chromeExtensionApp
 *
 * Main module of the application.
 */
angular
  .module('chromeExtensionApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
