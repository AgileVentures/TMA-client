'use strict';

app.controller('NavController', function ($scope, Basket, AuthenticationService) {
  $scope.basket = Basket;

  $scope.isLoggedIn = AuthenticationService.isLoggedIn;
  $scope.current_user = AuthenticationService.current_user;
  $scope.logout = AuthenticationService.logout;
});
