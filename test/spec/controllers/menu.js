'use strict';

describe('Controller: MenuController', function () {

  // load the controller's module
  beforeEach(module('tmaClientApp'));

  var MenuController,
    mockMenuService,
    mockMenuResponse,
    rootScope,
    scope,
    queryDeferred,
    q;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    q = $q;
    rootScope = $rootScope;
    scope = $rootScope.$new();

    mockMenuService = {
      getMenus: function() {
        queryDeferred = q.defer();
        return { $promise: queryDeferred.promise };
      }
    };

    spyOn(mockMenuService, 'getMenus').and.callThrough();

    MenuController = $controller('MenuController', {
      $scope: scope,
      Menu: mockMenuService
    });
  }));

  describe('Menu.getMenus', function() {
    beforeEach(function() {
      queryDeferred.resolve(mockMenuResponse);
      rootScope.$apply();
    });

    it('should query the MenuApi', function() {
      expect(mockMenuService.getMenus).toHaveBeenCalled();
    });

    it('should set the response from Menu.getMenus() to $scope.menus', function() {
      expect(scope.menus).toEqual(mockMenuResponse);
    });
  });
});
