(function () {
  'use strict';
  angular
    .module('craftShaq')
    .controller('ProductController', function ($scope, ProductService, $routeParams) {
      ProductService.getItems().then(function (items) {
        console.log(items);
        $scope.items = items;
      });
      ProductService.getSingleItem($routeParams.listing_id).then(function (item) {
        $scope.item = item;
      });

    })
    .controller('CartController', function ($scope, CartService) {
      CartService.getCartItems().success(function (items) {
        $scope.items = items;
      });
    $scope.addCartItem = function (item) {
      CartService.addCartItem(item);
    };

  });
  
})();
