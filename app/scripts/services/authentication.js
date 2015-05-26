'use strict';

app.service('AuthenticationService', function ($http, $q, SessionStoreService) {
  return {
    login: function(user) {
      var deferred = $q.defer();
      $http.post('//localhost:3000/v1/sessions', user)
        .success(function(data){
          SessionStoreService.set(data.user.name, data.user.email, data.authentication_token.token);
          deferred.resolve();
        })
        .error(function(data){
          deferred.reject(data.message);
        })
      return deferred.promise;
    },
    logout: function(){
      SessionStoreService.destroy();
      $http.delete('//localhost:3000/v1/sessions')
      .success(function(data){
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
          SessionStoreService.set(data.user.name, data.user.email, data.authentication_token.token);
          deferred.resolve();
        })
        .error(function(data){
          deferred.reject(data.message);
        })
      return deferred.promise;
    },
    isLoggedIn: function(){
      return (SessionStoreService.getToken() ? true : false);
    },
    current_user: function(){
      return SessionStoreService.getUser();
    }

  }
});
