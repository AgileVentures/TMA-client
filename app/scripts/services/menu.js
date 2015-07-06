'use strict';

app.factory('Menu', function($resource, ENV) {  
  return $resource( ENV.apiUri + '/v1/menus/:id', {
    id: '@_id'
  }, {
    'getMenus': {
      methods: 'GET',
      isArray: false
    }
  });
});
