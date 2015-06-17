'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:OrderController
 * @description
 * # OrderController
 * Controller of the tmaClientApp
 */
app.controller('OrderController', function ($scope, $location, Basket, Order, AuthenticationService) {
  $scope.basket = Basket;
  $scope.currentUser = AuthenticationService.currentUser();
  $scope.newOrder = {};

  $scope.createOrder = function() {
    var orderItems = [];
    angular.forEach($scope.basket.get(), function(item) {
      orderItems.push({'menu_id': item.menu, 'menu_item': item.id, 'quantity': item.quantity});
    });

    var now = new Date();
    var pickupTime = new Date(now.setHours(now.getHours() + 1));

    var order = {
      'order': {
        'order_time': now,
        'pickup_time': pickupTime
      },
      'order_items': orderItems
    };

    new Order.create(order, function (newOrder) {
      $scope.newOrder = newOrder;
      newOrder.$promise.then(
        function(){
          $scope.basket.clear();
          alert('Your order was successfully created!');
          $location.path('/payment/' + newOrder["id"]);
        },
        function(message){
          $scope.newOrder.errorMessages = message;
        });
    });
  };

  $scope.errors = function(order) {
    return typeof(order.errorMessages) !== 'undefined';
  };
});
