'use strict';

/**
 * @ngdoc overview
 * @name tmaClientApp
 * @description
 * # tmaClientApp
 *
 * Main module of the application.
 */

var app = angular.module('tmaClientApp', [
  'ngAnimate',
  'ngCookies',
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'ngTouch'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .when('/login', {
      templateUrl: 'views/authentication/login.html',
      controller: 'AuthenticationController'
    })
    .when('/register', {
      templateUrl: 'views/authentication/register.html',
      controller: 'AuthenticationController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    })
    .when('/menu', {
      templateUrl: 'views/menu.html',
      controller: 'MenuController'
    })
    .when('/checkout', {
      templateUrl: 'views/checkout.html',
      controller: 'CheckoutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});

app.run(function($rootScope, $location, AuthenticationService){
  var routePermissions = ['']; //routes that require login. eg: ['/menu']

  $rootScope.$on('$routeChangeStart', function(){
    if ((routePermissions.indexOf($location.path()) != -1) && (!AuthenticationService.isLoggedIn())) {
      $location.path('/login');
    }
  })
});
