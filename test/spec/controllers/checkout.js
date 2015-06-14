'use strict';

describe('Controller: CheckoutController', function () {

  // load the controller's module
  beforeEach(module('tmaClientApp'));

  var CheckoutController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckoutController = $controller('CheckoutController', {
      $scope: scope
    });
  }));
});
