'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:PaymentController
 * @description
 * # PaymentController
 * Controller of the tmaClientApp
 */
app.controller('PaymentController', function ($scope, $routeParams, Order, $window, CONFIG, AuthenticationService) {
  $scope.currentUser = AuthenticationService.currentUser();
  $scope.currentOrder;

  Order.get({id: $routeParams.id},
    function(data) {
      $scope.currentOrder = data;

      var total = 0;
      angular.forEach($scope.currentOrder.items, function(item) {
        total += item.price * item.quantity;
      });
      $scope.orderTotalAmount = total;
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
          result.orderId = currentOrder.id;
          //send stripe details to API
          $http.post(CONFIG.BASE_URI + '/v1/payment', result)
          .success(function(data){
            console.log(data);
          })
          .error(function(errorMessage){
              console.log(errorMessage);
          });

      }
  };

});