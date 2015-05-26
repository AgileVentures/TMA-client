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
  $scope.login = function(user){
    AuthenticationService.login(user).then(
      function(){
        $scope.current_user = AuthenticationService.current_user();
        $location.path('/menu');
      },
      function(message){
        $scope.user.errorMessage = message;
      })
  }

  $scope.newUser = {};
  $scope.register = function(newUser){
    AuthenticationService.register(newUser).then(
      function(){
        $scope.current_user = AuthenticationService.current_user();
        $location.path('/menu');
      },
      function(message){
        $scope.newUser.errorMessages = message;
      })
  }


});

