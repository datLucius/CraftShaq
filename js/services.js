(function () {
  'use strict';
  angular
    .module('craftShaq')
    .factory('ProductService',
    function ($http, _) {

      var etsyUrl = 'https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=shaq&api_key=b80iy4v7dpou7xau5eaqlzge&callback=JSON_CALLBACK';

      var getItems = function () {
        return $http.jsonp(etsyUrl).then(function (data) {
          var shaqArray = data.data.results;
          return shaqArray;
        });
      };

      var getSingleItem = function(listing_id) {
        return $http.jsonp(etsyUrl).then(function (data) {
          var narrowedDownArr = _.where(data, {listing_id: listing_id});
          return narrowedDownArr[0];
        });
      };

      return {
        getItems: getItems,
        getSingleItem: getSingleItem
      };
  })
  .factory('CartService', function ($http) {
    var url = 'http://tiy-fee-rest.herokuapp.com/collections/craftShaq';
    var addCartItem = function (item) {
      $http.post(url, item).success(function (resp) {
        console.log(resp);
      }).error(function (err) {
        console.log(err);
      });
    };
    var getCartItems = function () {
      return $http.get(url)
    };

    return {
      addCartItem: addCartItem,
      getCartItems: getCartItems
    };
  });
}) ();
