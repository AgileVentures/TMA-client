'use strict';

app.factory('Basket', function() {
  // Service logic
  // ...
  var basket = {};
  var count = 0;
  // Public API here
  return {
    get: function() {
      return basket;
    },

    add: function(item) {
      if (basket[item.name]) {
        basket[item.name].quantity += 1;
      } else {
        basket[item.name] = item;
        basket[item.name].quantity = 1;
        count += 1;
      }
    },

    remove: function(item) {
      delete basket[item.name];
      count -= 1;
    },

    count: function() {
      return count;
    },

    totalAmount: function() {
      var total = 0;
      angular.forEach(basket, function(item) {
        total += item.price * item.quantity;
      });
      return total;
    }
  };
});
