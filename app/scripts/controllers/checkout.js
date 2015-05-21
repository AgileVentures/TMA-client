'use strict';

app.controller('CheckoutCtrl', function($scope, Basket) {
  $scope.basket = Basket;
  // $scope.total = function() {
  // 	var total= 88;
  //   // console.log(JSON.stringify(basket, null, 4));
  // 	// angular.forEach(basket.get(), function(item){
  // 	// 	total += item.type.price * item.quantity;
  // 	// });
  //
  // 	return total;
  // };
});
