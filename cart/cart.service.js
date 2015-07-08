(function () {
  'use strict';
  angular
    .module('cart')
    .factory('CartService', function ($http, $q, $cacheFactory) {
      var url = 'http://tiy-fee-rest.herokuapp.com/collections/craftShaq';
      var addCartItem = function (item) {
        $http.post(url, item).success(function (resp) {

        }).error(function (err) {
          console.log(err);
        });
      };
      var getCartItems = function () {
        return $http.get(url);
      };

      return {
        addCartItem: addCartItem,
        getCartItems: getCartItems
      };
    });

})();
