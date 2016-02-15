angular.module("Store", ['ngResource', 'ui.router', 'ngFileUpload'])
  .config(["$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('products', {
          url: "/",
          templateUrl: "all_products.html",
          controller: "ProductsCtrl"
        })
        .state('product', {
          url: "/products/{id:int}",
          params: {productParams: undefined},
          templateUrl: "show_product.html",
          controller: "ProductCtrl"
        })
        .state('newProduct', {
          url: "/products/new",
          templateUrl: "new_product.html",
          controller: "NewProductCtrl"
        })
        .state('updateProduct', {
          url: "/products/:id/edit",
          templateUrl: "new_product.html",
          controller: "UpdateProductCtrl"
        })
  }]);
