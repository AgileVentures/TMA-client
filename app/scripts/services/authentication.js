'use strict';

app.service('AuthenticationService', function ($http, $q, SessionService) {
  return {
    login: function(user) {
      var deferred = $q.defer();
      $http.post('//localhost:3000/v1/sessions', user)
        .success(function(data){
          SessionService.set(data.user.name, data.user.email, data.authentication_token.token);
          deferred.resolve();
        })
        .error(function(data){
          deferred.reject(data.message);
        })
      return deferred.promise;
    },
    logout: function(){
      $http.delete('//localhost:3000/v1/sessions')
      .success(function(data){
        SessionService.destroy();
        console.log(data);   //FLASH
      })
      .error(function(data){
        console.log(data);   //FLASH
      })
    },
    register: function(newUser){
      var deferred = $q.defer();
      $http.post('//localhost:3000/v1/users', newUser)
        .success(function(data){
          SessionService.set(data.user.name, data.user.email, data.authentication_token.token);
          deferred.resolve();
        })
        .error(function(data){
          deferred.reject(data.message);
        })
      return deferred.promise;
    },
    isLoggedIn: function(){
      return (SessionService.getToken() ? true : false);
    },
    current_user: function(){
      return SessionService.getUser();
    }

  }
});
