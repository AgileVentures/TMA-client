'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tmaClientApp
 */
app.controller('MainController', function ($scope,menu,basket) {
	$scope.menu   = menu;
	$scope.basket = basket;
});
