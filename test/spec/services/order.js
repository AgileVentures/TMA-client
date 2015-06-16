'use strict';

describe('Service: order', function () {

  // load the service's module
  beforeEach(module('tmaClientApp'));

  // instantiate service
  var order;
  beforeEach(inject(function (_Order_) {
    order = _Order_;
  }));

  it('should do something', function () {
    expect(!!order).toBe(true);
  });

});
