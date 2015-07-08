(function () {
  'use strict';
  angular
    .module('products')
    .factory('ProductService', function ($http, _, $q, $cacheFactory) {
       var cacheEngine = $cacheFactory('ShaqProducts');
       var etsyUrl = 'https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=shaq&api_key=b80iy4v7dpou7xau5eaqlzge&callback=JSON_CALLBACK';

        var getItems = function () {
          var deferred = $q.defer();
          var cache = cacheEngine.get('items');
          if(cache) {
            deferred.resolve(cache);
          } else {
            $http.get(etsyUrl).then(function (items) {
              var shaqArray = data.data.results;
              console.log('http method');
              cacheEngine.put('items');
               deferred.resolve(shaqArray);
            });
          }
          return deferred.promise;
        };

        var getSingleItem = function (listing_id) {
          var deferred = $q.defer();
          var cache = cacheEngine.get('items');
          if(cache) {
            console.log('single item cache');
            deferred.resolve(_.where(cache, {listing_id: listing_id})[0]);
          } else {
            $http.get(etsyUrl.then(function (items) {
              var narrowedDownArr = _.where(data.data.results, {listing_id: listing_id});
                deferred.resolve(narrowedDownArr)[0]);
            });
          }
          return deferred.promise;

        };

        return {
          getItems: getItems,
          getSingleItem: getSingleItem
        };
    });

})();
