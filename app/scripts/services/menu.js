app.factory('Menu', ['$resource', function($resource) {
  function Menu() {
  	var base_url = 'localhost:3000/v1';
    this.service = $resource(base_url + '/menus/:menuId', {menuId: '@id'});
  };
  Menu.prototype.all = function() {
    return this.service.query();
  };
  return new Menu;
}]);