(function () {
  'use strict';
  angular
    .module('products', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/products', {
          templateUrl: 'products/views/listing.html',
          controller: 'ProductController'
        })
      .when('/products/:itemId', {
              templateUrl: 'products/views/detail.html',
              controller: 'ProductController'
            });
        });
    })();
