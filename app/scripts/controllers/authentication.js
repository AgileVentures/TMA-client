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

  $scope.signin = function(user){
    AuthenticationService.signin(user).then(
      function(){
        $location.path('/');
      },
      function(message){
        $scope.user.errorMessage = message;
      })
  }

});

