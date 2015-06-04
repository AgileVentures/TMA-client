'use strict';

app.service('AuthenticationService', function ($http, $q, SessionStoreService) {
  return {
    login: function(user) {
      var deferred = $q.defer();
      $http.post('//localhost:3000/v1/sessions', user)
        .success(function(data){
          SessionStoreService.set(data.user.id, data.user.name, data.user.email, data.authentication_token.token);
          deferred.resolve();
        })
        .error(function(data){
          deferred.reject(data.message);
        });
      return deferred.promise;
    },
    logout: function(){
      $http.delete('//localhost:3000/v1/sessions')
      .success(function(data){
        SessionStoreService.destroy();
      })
      .error(function(data){
        SessionStoreService.destroy();
      });
    },
    register: function(newUser){
      var deferred = $q.defer();
      $http.post('//localhost:3000/v1/users', newUser)
        .success(function(data){
          SessionStoreService.set(data.user.id, data.user.name, data.user.email, data.authentication_token.token);
          deferred.resolve();
        })
        .error(function(data){
          deferred.reject(data.message);
        });
      return deferred.promise;
    },
    isLoggedIn: function(){
      return (SessionStoreService.getToken() ? true : false);
    },
    currentUser: function(){
      return SessionStoreService.getUser();
    }
  };
});
