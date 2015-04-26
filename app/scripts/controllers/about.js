'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tmaClientApp
 */
angular.module('tmaClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
