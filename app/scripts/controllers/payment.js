'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:PaymentController
 * @description
 * # PaymentController
 * Controller of the tmaClientApp
 */
app.controller('PaymentController', function ($scope, $routeParams, Order, $window, CONFIG, AuthenticationService, $http) {
  $scope.currentUser = AuthenticationService.currentUser();
  $scope.currentOrder = {};

  //get order
  Order.get({id: $routeParams.id},
    function(data) {
      $scope.currentOrder = data;
      $scope.orderTotalAmount = data.amount;
    },
    function(errorMessage){
      $scope.currentOrderError = "Order not found";
    }
  );

  $window.Stripe.setPublishableKey(CONFIG.STRIPE_PUBLISHABLE_KEY);

  // Stripe Response Handler
  $scope.stripeCallback = function (code, result) {
    if (result.error) {
        window.alert('it failed! error: ' + result.error.message);
    } else {
      var orderId = $scope.currentOrder.id;

      var payment_params = {
        stripeToken: result.id
      }

      //send stripe details to API
      $http.post(CONFIG.BASE_URI + '/v1/orders/' + orderId + '/pay', payment_params)
      .success(function(data){
        console.log(data);
      })
      .error(function(errorMessage){
          console.log(errorMessage);
      });

    }
  };

});