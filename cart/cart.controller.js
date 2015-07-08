(function () {
  'use strict';
  angular
    .module('cart')
    .controller('CartController', function ($scope, CartService, $location) {

    if($location.url() === '/cart') {
      CartService.getCartItems().success(function (items) {
        $scope.cartItems = cartItems;
      });
    }

      $scope.addCartItem = function (item) {
        CartService.addCartItem(item);
      };

    });

})();
