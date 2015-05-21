'use strict';

app.service('AuthenticationService', function ($http, $q, SessionService) {
  return {
    signin: function(user) {
      var deferred = $q.defer();
      $http.post('//localhost:3000/v1/sessions', user)
        .success(function(data){
          SessionService.set(data.user.email, data.authentication_token.token);
          deferred.resolve()
        })
        .error(function(data){
          deferred.reject(data.message);
        })
      return deferred.promise;
    },
    signout: function(){

    },
    signup: function(newUser){

    },
    isLoggedIn: function(){
      return (SessionService.getToken() ? true : false);
    }

  }
});
