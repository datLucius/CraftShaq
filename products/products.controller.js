(function () {
  'use strict';
  angular
    .module('products')
    .controller('ProductController', function ($scope, ProductService, $routeParams) {
      ProductService.getItems().then(function (items) {

        $scope.items = items;
      });
      if($routeParams.itemId) {
      PhotoService.getSingleItem($routeParams.itemId).then(function (item) {
        $scope.item = item;
      });
      }

    });
})();
