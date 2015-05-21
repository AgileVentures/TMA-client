'use strict';

describe('Service: Basket', function () {

  // load the service's module
  beforeEach(module('tmaClientApp'));

  // instantiate service
  var mockBasket;

  beforeEach(inject(function(Basket) {
    mockBasket = Basket;
  }));

  it('should initially be empty', function(){
    expect(mockBasket.count()).toBe(0);
  });

  describe('Basket.get()', function() {
    it('should have a get function', function() {
      expect(angular.isFunction(mockBasket.get)).toBe(true);
    });
  });

  describe('Basket.add()', function() {
    var item1 = { id: 2, name: 'Aloo Matar', price: 59.0 };

    it('should have a function to add new items to basket', function() {
      expect(angular.isFunction(mockBasket.add)).toBe(true);
    });

    it('should add items to the basket', function() {
      expect(mockBasket.get()).toEqual({});
      mockBasket.add(item1);
      expect(mockBasket.count()).toBe(1);
    });

    it('should update item quantity if item already in basket', function() {
      expect(mockBasket.get()).toEqual({});
      mockBasket.add(item1);
      mockBasket.add(item1);
      expect(mockBasket.count()).toBe(1);

      var basket = mockBasket.get();
      expect(basket[item1.name].quantity).toBe(2);
    });
  });

  describe('Basket.remove()', function() {
    var item1 = { id: 2, name: 'Aloo Matar', price: 59.0 };
    var item2 = { id: 3, name: 'Chicken Razala', price: 29.0 };

    it('should have a function to remove items from basket', function() {
      expect(angular.isFunction(mockBasket.remove)).toBe(true);
    });

    it('should remove a given item from basket', function() {
      expect(mockBasket.get()).toEqual({});
      mockBasket.add(item1);
      mockBasket.add(item2);
      mockBasket.remove(item1);
      expect(mockBasket.count()).toBe(1);
    });
  });

  it('should have a count function', function() {
    expect(angular.isFunction(mockBasket.count)).toBe(true);
  });

  describe('Basket.totalAmount()', function() {
    var item1 = { id: 2, name: 'Aloo Matar', price: 59.0 };
    var item2 = { id: 3, name: 'Chicken Razala', price: 29.0 };

    it('should have a function that returns total amount of basket', function() {
      expect(angular.isFunction(mockBasket.totalAmount)).toBe(true);
    });

    it('should return 0 when basket is empty', function() {
      expect(mockBasket.get()).toEqual({});
      expect(mockBasket.totalAmount()).toBe(0);
    });

    it('should return the correct total amount to be paid by client', function() {
      expect(mockBasket.totalAmount()).toBe(0);
      mockBasket.add(item1);
      expect(mockBasket.totalAmount()).toBe(59.0);
      mockBasket.add(item1);
      mockBasket.add(item2);
      expect(mockBasket.totalAmount()).toBe(147.0);
    });
  });
});
