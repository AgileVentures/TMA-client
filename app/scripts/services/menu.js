'use strict';

app.factory('Menu', function($resource) {  
  var baseUri = '//localhost:3000';
  // var baseUri = '//tma-develop.herokuapp.com';
  return $resource( baseUri + '/v1/menus/:id', {
    id: '@_id'
  }, {
    'getMenus': {
      methods: 'GET',
      isArray: false
    }
  });
});
