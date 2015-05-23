'use strict';

describe('Controller: CheckoutCtrl', function() {

  // load the controller's module
  beforeEach(module('tmaClientApp'));

  var CheckoutCtrl,
    rootScope,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    rootScope = $rootScope;
    scope = $rootScope.$new();

    CheckoutCtrl = $controller('CheckoutCtrl', {
      $scope: scope,
    });
  }));

  it('should have basket object on the scope', function() {
    expect(scope.basket).toBeDefined();
  });
});
