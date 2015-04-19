'use strict';

/**
 * @ngdoc function
 * @name chromeExtensionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chromeExtensionApp
 */
angular.module('chromeExtensionApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
