'use strict';

describe('Controller: NavController', function() {

  // load the controller's module
  beforeEach(module('tmaClientApp'));

  var NavController,
    mockBasketService,
    rootScope,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    rootScope = $rootScope;
    scope = $rootScope.$new();

    mockBasketService = {
      basket: [
        {
          item: 'myItem',
          price: '59.0',
          description: 'Potatoes and peas in curry.'
        }
      ],
      count: function(){
        return 1;
      }
    };

    NavController = $controller('NavController', {
      $scope: scope,
      Basket: mockBasketService
    });
  }));

  it('should have basket object on the scope', function() {
    rootScope.$apply();
    expect(scope.basket).toBeDefined();
    // expect(scope.basket).toEqual(mockBasketService);
  });
});
