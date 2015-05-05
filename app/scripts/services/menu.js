'use strict';

app.factory('Menu', function($resource) {
  return $resource('http://localhost:3000/v1/menus');
});
