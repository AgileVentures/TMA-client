'use strict';

app.service('SessionService', function($http) {
  return {
    set: function(name, email, token){
      $http.defaults.headers.common['name']  = name;
      $http.defaults.headers.common['email'] = email;
      $http.defaults.headers.common['token'] = token;
    },
    getUser: function() {
      if (!$http.defaults.headers.common['name']) return null;
      return {
        name: $http.defaults.headers.common['name'],
        email: $http.defaults.headers.common['email'],
      }
    },
    getToken: function() {
      return $http.defaults.headers.common['token']
    },
    destroy: function(){
      $http.defaults.headers.common['name']  = null;
      $http.defaults.headers.common['email'] = null;
      $http.defaults.headers.common['token'] = null;
      console.log("send delete session to BACKEND");// $http.delete('//');
    }
  }

});