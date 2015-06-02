'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:SessionController
 * @description
 * # SessionController
 * Controller of the tmaClientApp
 */
app.controller('AuthenticationController', function ($scope, $location, AuthenticationService) {

  $scope.user = {};
  // $scope.user.errorMessage =
  $scope.login = function(user){
    AuthenticationService.login(user).then(
      function(){
        $scope.currentUser = AuthenticationService.currentUser();
        $location.path('/');
      },
      function(message){
        $scope.user.errorMessage = message;
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
    return typeof(user.errorMessage) !== "undefined";
  };
});
