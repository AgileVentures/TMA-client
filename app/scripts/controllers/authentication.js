'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:SessionController
 * @description
 * # SessionController
 * Controller of the tmaClientApp
 */
app.controller('AuthenticationController', function ($scope, $location, AuthenticationService, Basket) {

  $scope.user = {};
  $scope.login = function(user){
    AuthenticationService.login(user).then(
      function(){
        $scope.currentUser = AuthenticationService.currentUser();
        if (Basket.count() > 0) {
          $location.path('/confirm-order');
        } else {
          $location.path('/menu');
        }
      },
      function(message){
        $scope.user.errorMessages = message;
      });
  };

  $scope.newUser = {};
  $scope.register = function(newUser){
    AuthenticationService.register(newUser).then(
      function(){
        $scope.currentUser = AuthenticationService.currentUser();
        $location.path('/');
      },
      function(message){
        $scope.newUser.errorMessages = message;
      });
  };

  $scope.errors = function(user) {
    return typeof(user.errorMessages) !== 'undefined';
  };
});
