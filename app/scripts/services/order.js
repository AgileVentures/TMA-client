'use strict';

/**
 * @ngdoc factory
 * @name tmaClientApp.order
 * @description
 * # order
 * Service in the tmaClientApp.
 */
app.factory('Order', function($resource, ENV) {
  return $resource( ENV.apiUri + '/v1/orders/:id', {
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
