'use strict';

app.controller('CheckoutCtrl', function($scope, Basket, Order, AuthenticationService) {
  $scope.basket = Basket;
  $scope.currentUser = AuthenticationService.currentUser();
  var hour = 60 * 60 * 1000; // 1 Hour in ms
  $scope.pickupTime = new Date() + (2 * hour);


  $scope.createOrder = function() {
    console.log('Building the order...');
    var orderItems = [];
    angular.forEach($scope.basket.get(), function(item) {
      orderItems.push({'menu_id': item.menu, 'menu_item': item.id, 'quantity': item.quantity});
    });

    // var order = null;
    var order = {
      'order': {
        // 'user_id': $scope.currentUser.id,
        // 'menu_id': 2,
        'order_time': new Date(),
        'pickup_time': $scope.pickupTime
      },
      'order_items': orderItems
    };
    console.log('Submitting the order...');
    console.log(order);
    new Order.create(order).then(function (newOrder) {
      console.log('The following order was created successfully');
      console.log(newOrder);
    });
  };
});
