'use strict';

app.factory('Menu', function($resource) {
  return $resource('//localhost:3000/v1/menus', null, {
    'getMenus': { methods: 'GET', isArray: false }
  });
});
