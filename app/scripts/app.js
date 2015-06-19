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
  'ngTouch',
  'angular-loading-bar',
  'config'
  'angularPayments'
]);

app.config(function($routeProvider) {
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
    .when('/cart', {
      templateUrl: 'views/cart.html',
      controller: 'CartController'
    })
    .when('/checkout', {
      templateUrl: 'views/checkout.html',
      controller: 'CheckoutController'
    })
    .when('/confirm-order', {
      templateUrl: 'views/confirm-order.html',
      controller: 'OrderController'
    })
    .when('/payment/:id', {
      templateUrl: 'views/payment.html',
      controller: 'PaymentController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.constant('CONFIG', {
  // 'BASE_URI': '//localhost:3000',
  'BASE_URI': '//tma-develop.herokuapp.com',
  STRIPE_PUBLISHABLE_KEY: ""
});

app.config(function($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});

//restricted paths that will redirect to '#/login' if not loggedin
app.run(function($rootScope, $location, AuthenticationService) {
  var routePermissions = ['']; //paths that require login. eg: ['/menu']

  $rootScope.$on('$routeChangeStart', function() {
    if (($location.path().indexOf(routePermissions) !== -1) && (!AuthenticationService.isLoggedIn()) && ($location.path() !== '')) {
      $location.path('/login');
    }
  });
});
