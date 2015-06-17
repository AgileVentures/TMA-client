'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:PaymentController
 * @description
 * # PaymentController
 * Controller of the tmaClientApp
 */
app.controller('PaymentController', function ($scope, $routeParams, Order, AuthenticationService) {
  $scope.currentUser = AuthenticationService.currentUser();
  $scope.currentOrder;

  Order.get({id: $routeParams.id},
    function(data) {
      $scope.currentOrder = data;

      var total = 0;
      angular.forEach($scope.currentOrder.items, function(item) {
        total += item.price * item.quantity;
      });
      $scope.orderTotalAmount = total;
    },
    function(errorMessage){
      $scope.currentOrderError = "Order not found";
    }
  );

});