'use strict';

describe('Controller: CheckoutCtrl', function() {

  // load the controller's module
  beforeEach(module('tmaClientApp'));

  var CheckoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    CheckoutCtrl = $controller('CheckoutCtrl', {
      $scope: scope
    });
  }));

});
