(function () {
  'use strict';
  angular
    .module('craftShaq')
    .factory('ProductService',
    function ($http, _,) {

      var urlOpts = {
        etsyUrl: 'https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=shaq&api_key=b80iy4v7dpou7xau5eaqlzge&callback=JSON_CALLBACK',
        format: 'json',
      };

      var getItems = function () {
        return $http.get(etsyUrl).then(function (items) {
          var shaqArray = data.results;
          return shaqArray;
        });
      };

      var getSingleItem = function(listing_id) {
        return $http.get(etsyUrl).then(function (items) {
          var narrowedDownArr = _.where(data.results, {listing_id: listing_id});
          return narrowedDownArr[0];
        });
      };

      return {
        getItem: getItem,
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
