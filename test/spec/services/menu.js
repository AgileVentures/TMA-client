'use strict';

describe('Service: Menu', function() {
  beforeEach(function() {
    jasmine.addMatchers({
      toEqualData: function() {
        return {
          compare: function(actual, expected) {
            return { pass: angular.equals(actual, expected) };
          }
        };
      }
    });
  });

  // load the service's module
  beforeEach(module('tmaClientApp'));

  var httpBackend;
  var data = {
    'date_range': 'someDateRange',
    'menus': [{
      'id': 1,
      'title': 'myMenu',
      'start_date': '2015-05-06',
      'end_date': '2015-05-06'
    }]
  };

  // instantiate service
  var mockMenu, config;
  beforeEach(inject(function($httpBackend, Menu, CONFIG) {
    httpBackend = $httpBackend;
    mockMenu = Menu;
    config = CONFIG;
  }));

  describe('getMenus', function() {
    it('should request menus from the API', function() {
      httpBackend.expect('GET', config.BASE_URI + '/v1/menus').respond(data);
      var response = mockMenu.getMenus();
      httpBackend.flush();
      expect(response).toEqualData(data);
    });
  });
});
