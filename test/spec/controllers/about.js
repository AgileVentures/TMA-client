'use strict';

describe('Controller: AboutController', function () {

  // load the controller's module
  beforeEach(module('tmaClientApp'));

  var AboutController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutController = $controller('AboutController', {
      $scope: scope
    });
  }));

  it('should be truthy', function () {
    expect(true).toBe(true);
  });
});
