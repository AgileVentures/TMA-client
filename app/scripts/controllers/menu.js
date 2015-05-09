'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:MainCtrl
 * @description
 * # MenuController
 * Controller of the tmaClientApp
 */
app.controller('MenuController', function ($scope, Menu,basket) {
  Menu.getMenus().$promise.then(function(response) {
    $scope.menus = response;
	$scope.basket = basket;
  });
});
