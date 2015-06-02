'use strict';

app.service('SessionStoreService', function ($window) {
  return {
    set: function(name, email, token){
      $window.sessionStorage.name = name;
      $window.sessionStorage.email = email;
      $window.sessionStorage.token = token;
    },
    getUser: function() {
      if (!$window.sessionStorage.name) { return null; }
      return {
        name: $window.sessionStorage.name,
        email: $window.sessionStorage.email
      };
    },
    getToken: function() {
      return $window.sessionStorage.token;
    },
    destroy: function(){
      delete $window.sessionStorage.name;
      delete $window.sessionStorage.email;
      delete $window.sessionStorage.token;
    }
  };

});
