'use strict';

app.service('SessionService', function($http) {
  return {
    set: function(email, token){
      $http.defaults.headers.common['email'] = email;
      $http.defaults.headers.common['token'] = token;
    },
    getEmail: function() {
      return $http.defaults.headers.common['email']
    },
    getToken: function() {
      return $http.defaults.headers.common['token']
    },
    destroy: function(){
      $http.defaults.headers.common['email'] = null;
      $http.defaults.headers.common['token'] = null;
      console.log("send delete session to BACKEND");// $http.delete('//');
    }
  }

});