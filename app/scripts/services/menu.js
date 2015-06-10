'use strict';

app.factory('Menu', function($resource, CONFIG) {  
  return $resource( CONFIG.BASE_URI + '/v1/menus/:id', {
    id: '@_id'
  }, {
    'getMenus': {
      methods: 'GET',
      isArray: false
    }
  });
});
