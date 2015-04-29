'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('tmaClientApp'));

  var MainController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainController = $controller('MainController', {
      $scope: scope
    });
  }));

  it('should be truthy', function () {
    expect(true).toBe(true);
  });
});
