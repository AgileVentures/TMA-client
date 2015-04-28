'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tmaClientApp
 */
angular.module('tmaClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
