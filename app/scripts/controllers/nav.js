'use strict';

app.controller('NavController', function ($scope, Basket, AuthenticationService) {
  $scope.basket = Basket;

  $scope.isLoggedIn = AuthenticationService.isLoggedIn;
  $scope.currentUser = AuthenticationService.currentUser;
  $scope.logout = AuthenticationService.logout;
});
