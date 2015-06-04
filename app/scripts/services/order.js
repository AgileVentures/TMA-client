'use strict';

/**
 * @ngdoc factory
 * @name tmaClientApp.order
 * @description
 * # order
 * Service in the tmaClientApp.
 */
app.factory('Order', function($resource) {
  var baseUri = '//localhost:3000';
  // var baseUri = '//tma-develop.herokuapp.com';
  return $resource( baseUri + '/v1/orders/:id', {
    id: '@_id'
  }, {
    create: {
      method: 'POST'
    },
    update: {
      method: 'PATCH'
    },
    delete: {
      method: 'PATCH',
      status: 'cancelled'
    }
  });
});
