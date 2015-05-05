'use strict';

app.factory('Menu', ['$resource', function($resource) {
  function Menu() {
  	var baseUri = 'http://localhost:3000/v1';
    this.service = $resource(baseUri + '/menus/:menuId', {menuId: '@id'});
  }

  Menu.prototype.all = function() {
    return this.service.query();
  };
  return new Menu;
}]);
