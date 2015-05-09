'use strict';

app.controller('CheckoutCtrl', function($scope, basket) {
  $scope.basket = basket;
  $scope.total = function() {
  	var total= 0;
  	angular.forEach(basket.get(), function(item){
  		total += item.type.price * item.quantity;
  	});
  	return total;
  };
});
