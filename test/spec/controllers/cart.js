'use strict';

describe('Controller: CartController', function() {

  // load the controller's module
  beforeEach(module('tmaClientApp'));

  var CartController,
    rootScope,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    rootScope = $rootScope;
    scope = $rootScope.$new();

    CartController = $controller('CartController', {
      $scope: scope,
    });
  }));

  it('should have basket object on the scope', function() {
    expect(scope.basket).toBeDefined();
  });
});
