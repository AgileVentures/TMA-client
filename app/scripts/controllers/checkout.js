'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:CheckoutController
 * @description
 * # CheckoutController
 * Controller of the tmaClientApp
 */
app.controller('CheckoutController', function ($scope, $location, Basket, AuthenticationService) {
  $scope.user = {};
  $scope.basket = Basket;

  if (AuthenticationService.isLoggedIn()) {
    $location.path('/confirm-order');
  }
  
  $scope.register = function(user){
    AuthenticationService.register(user).then(
      function(){
        $scope.currentUser = AuthenticationService.currentUser();
        $location.path('/confirm-order');
      },
      function(message){
        $scope.user.errorMessages = message;
      });
  };
});
