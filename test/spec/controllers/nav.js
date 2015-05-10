'use strict';

describe('Controller: NavCtrl', function() {

  // load the controller's module
  beforeEach(module('tmaClientApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

});
