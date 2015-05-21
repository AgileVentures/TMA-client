'use strict';

app.factory('basket', function() {
  // Service logic
  // ...
  var basket = {};
  var count = 0;
  // Public API here
  return {
    get: function() {
      //console.log(basket);
      return basket;
    },
    add: function (item){
    	if (basket [item.item]){
    		basket[item.item].quantity += 1;
    	} else {
    		basket[item.item] = {
    			type: item,
    			quantity: 1
    		};
    	}
    	count += 1;
    },
    remove: function (item){
      if (delete basket[item.type.item]) count -= item.quantity;
    },
    count: function () {
      //console.log(count);
    	return count;
    }
  };
});
