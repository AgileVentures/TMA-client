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
  $scope.currentOrderError = '';

  //get order
  Order.get({id: $routeParams.id},
    function(data) {
      serializeCurrentOrder(data);
    },
    function(errorMessage){
      $scope.currentOrder.errorMessage = 'Order not found';
    }
  );

  // Stripe Response Handler
  $scope.stripeCallback = function (code, result) {
    if (result.error) {
      $scope.currentOrder.stripeError = result.error.message
    } else {
      var orderId = $scope.currentOrder.id;
      var payment_params = { stripeToken: result.id }

      //send stripe details to API
      $http.post(CONFIG.BASE_URI + '/v1/orders/' + orderId + '/pay', payment_params)
      .success(function(data){
        serializeCurrentOrder(data)
      })
      .error(function(data){
        $scope.currentOrder.errorMessage = data.message || "Server error";
        if (data.errors) {
         $scope.currentOrder.errorMessage += ' ' + data.errors.message;
        }
      });
    }
  };

  $window.Stripe.setPublishableKey(CONFIG.STRIPE_PUBLISHABLE_KEY);

  $scope.clearErrorMessages = function(){
    $scope.currentOrder.errorMessage = null;
    $scope.currentOrder.stripeError = null;
  }

  function serializeCurrentOrder(data){
    $scope.currentOrder = {
      id: data.id,
      status: data.status,
      pickupTime: data.pickup_time,
      amount: data.amount,
      errorMessage: null,
      stripeError: null
    };
  }

});