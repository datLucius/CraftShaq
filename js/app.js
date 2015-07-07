(function () {
  'use strict';

  angular
    .module('craftShaq', [
      'ngRoute',
      'underscore',
    ])
    .config(function
    ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl:
          'views/product/listing.html',
          controller:
          'ProductController'
        })
        .when('/cart', {
          templateUrl:
          'views/cart/main.html',
          controller:
          'CartController'
        })
        .when('/detail/:listing_id', {
          templateUrl:
          'views/detail.html',
          controller:
          'ProductController'
        })
        .when('/404', {
          template: '<h2>Even Shaq misses sometimes....Shaq on free-throws: “I’ll hit them when it matters.”</h2>'
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
