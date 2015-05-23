'use strict';

app.controller('CheckoutCtrl', function($scope, Basket) {
  $scope.basket = Basket;
});
