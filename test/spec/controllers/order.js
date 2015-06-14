'use strict';

describe('Controller: OrderController', function () {

  // load the controller's module
  beforeEach(module('tmaClientApp'));

  var OrderController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderController = $controller('OrderController', {
      $scope: scope
    });
  }));
});
