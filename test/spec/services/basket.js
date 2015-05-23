'use strict';

describe('Service: Basket', function () {

  // load the service's module
  beforeEach(module('tmaClientApp'));

  // instantiate service
  var mockBasket,
      item1 = null,
      item2 = null;

  beforeEach(inject(function(Basket) {
    mockBasket = Basket;
  }));

  beforeEach(function() {
    item1 = { id: 2, name: 'Aloo Matar', price: 59.0 };
    item2 = { id: 3, name: 'Chicken Razala', price: 29.0 };
  });

  it('should initially be empty', function(){
    expect(mockBasket.count()).toBe(0);
  });

  describe('Basket.get()', function() {
    it('should have a get function', function() {
      expect(angular.isFunction(mockBasket.get)).toBe(true);
    });
  });

  describe('Basket.add()', function() {
    it('should add items to the basket', function() {
      mockBasket.add(item1);
      expect(mockBasket.count()).toBe(1);
    });

    it('should update item quantity if item already in basket', function() {
      mockBasket.add(item1);
      mockBasket.add(item1);
      expect(mockBasket.count()).toBe(1);
      expect(mockBasket.quantityOf(item1.name)).toBe(2);
    });
  });

  describe('Basket.remove()', function() {
    it('should have a function to remove items from basket', function() {
      expect(angular.isFunction(mockBasket.remove)).toBe(true);
    });

    it('should remove a given item from basket', function() {
      mockBasket.add(item1);
      mockBasket.add(item2);
      mockBasket.remove(item1);
      var obj = {};
      obj[item2.name] = item2;
      expect(mockBasket.get()).toEqual(obj);

      // Ensure a second attempt remove the same object doesn't change
      // the item count in the basket
      mockBasket.remove(item1);
      expect(mockBasket.count()).toBe(1);
    });
  });

  describe('Basket.totalAmount()', function() {
    it('should have a function that returns total amount of basket', function() {
      expect(angular.isFunction(mockBasket.totalAmount)).toBe(true);
    });

    it('should return 0 when basket is empty', function() {
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
