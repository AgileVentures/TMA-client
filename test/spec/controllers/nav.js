'use strict';

describe('Controller: NavController', function() {

  // load the controller's module
  beforeEach(module('tmaClientApp'));

  var NavController,
    rootScope,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    rootScope = $rootScope;
    scope = $rootScope.$new();

    NavController = $controller('NavController', {
      $scope: scope,
    });
  }));

  it('should have basket object on the scope', function() {
    rootScope.$apply();
    expect(scope.basket).toBeDefined();
  });
});
