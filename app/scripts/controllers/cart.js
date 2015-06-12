'use strict';

app.controller('CartController', function($scope, Basket, Order, AuthenticationService) {
  $scope.basket = Basket;
  $scope.isDisabled = $scope.basket.count() === 0;
  $scope.currentUser = AuthenticationService.currentUser();

  console.log('Disabled: ', $scope.isDisabled);
  $scope.createOrder = function() {
    console.log('Building the order...');
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
    console.log('Submitting the order...');
    console.log(order);
    new Order.create(order, function (newOrder) {
      console.log('The following order was created successfully');
      console.log(newOrder);
    });
  };
});
