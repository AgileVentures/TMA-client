'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:navigationController
 * @description
 * # navigationController
 * Controller of the tmaClientApp
 */
app.controller('navigationController', function ($scope, AuthenticationService) {
  $scope.isLoggedIn = AuthenticationService.isLoggedIn;
  $scope.signout = AuthenticationService.signout;
});
