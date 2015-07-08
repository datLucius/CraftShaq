(function () {
  'use strict';

  angular
    .module('craftShaq', [
      'ngRoute',
      'underscore',
      'cart',
      'products'
    ])
    .config(function
    ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl:
          'product/views/listing.html',
          controller:
          'ProductController'
        })
        .when('/cart', {
          templateUrl:
          'views/cart/main.html',
          controller:
          'CartController'
        })
        .when('/detail/:itemId', {
          templateUrl:
          'products/views/detail.html',
          controller:
          'ProductController'
        })
        .when('/404', {
          template: '<h2>Even Shaq misses sometimes....</h2><aside>Shaq on free-throws: “I’ll hit them when it matters.”</side>'
        })
        .otherwise({
          redirectTo: '/404'
        });
    });
    angular
      .module('underscore', [])
      .factory('_', function
      ($window) {
        return $window._;
      });
      
})();
