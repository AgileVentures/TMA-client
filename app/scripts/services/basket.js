'use strict';

app.factory('basket', function() {
  // Service logic
  // ...

  var basket = {};
  var count = 0;
  // Public API here
  return {
    get: function() {
      return basket;
    },
    add: function (item){
    	debugger;
    	if (basket [item.id]){
    		basket[item.id].quantity += 1;
    	} else {
    		basket[item.id] = {
    			type: item,
    			quantity: 1
    		};
    	}
    	count += 1;
    },
    remove: function (item){
    	count -= basket[item.id].amount;
    	delete basket[item.id];
    },
    count: function () {
    	return count;
    }
  };
});
