'use strict';

app.controller('CartController', function($scope, $location, Basket) {
  $scope.basket = Basket;
  $scope.isDisabled = $scope.basket.count() === 0;

  $scope.checkout = function () {
    $location.path('/confirm-order');
  };
});
