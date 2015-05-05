'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:MainCtrl
 * @description
 * # MenuController
 * Controller of the tmaClientApp
 */
app.controller('MenuController', [
	'$scope',
	'Menu',
	function ($scope, Menu) {
    $scope.menus = Menu.all();
}]);
