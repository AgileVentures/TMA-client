'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tmaClientApp
 */
app.controller('MenuController', [
	'$scope', 
	'Menu', 
	function ($scope,Menu) {
    $scope.menus = Menus.all();
}]);
