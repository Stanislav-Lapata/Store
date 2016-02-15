// app = angular.module("Store", ['ngResource', 'ui.router', 'ngFileUpload']);

// app.config(["$httpProvider", function($httpProvider) {
//   $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
// }]);

// app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
//   function($stateProvider, $urlRouterProvider, $locationProvider) {
//   $locationProvider.html5Mode(true);
//   $urlRouterProvider.otherwise("/");
//     $stateProvider
//       .state('products', {
//         url: "/",
//         templateUrl: "all_products.html",
//         controller: "ProductsCtrl"
//       })
//       .state('product', {
//         url: "/products/{id:int}",
//         params: {productParams: undefined},
//         templateUrl: "show_product.html",
//         controller: "ProductCtrl"
//       })
//       .state('newProduct', {
//         url: "/products/new",
//         templateUrl: "new_product.html",
//         controller: "NewProductCtrl"
//       })
//       .state('updateProduct', {
//         url: "/products/:id/edit",
//         templateUrl: "new_product.html",
//         controller: "UpdateProductCtrl"
//       })
// }]);

// app.factory('Product', ['$resource', function($resource){
//     return $resource('/api/products/:id', {id: '@id'}, {update: {method: 'PATCH'}});
// }]);

// app.factory('Image', ['$resource', function($resource){
//     return $resource('/api/images/:id', {id: '@id'});
// }]);

// app.controller('ProductsCtrl', ['$scope', 'Product', function($scope, Product){
//     $scope.products = Product.query();

//     $scope.destroyProduct = function(product) {
//       Product.remove({id: product.id}).$promise.then(function() {
//         var index = $scope.products.indexOf(product);
//         $scope.products.splice(index, 1);
//       });
//     };
//   }]);

// app.controller('ProductCtrl', ['$scope', 'Product', '$stateParams', 'Upload', 'Image',
//   function($scope, Product, $stateParams, Upload, Image){

//   var id = $stateParams.id;
//   if ($scope.product = $stateParams.productParams)
//     {$scope.product.images = []}
//   else {
//     $scope.product = Product.get({id: id})};
//     $scope.addImage = function() {
//       Upload.upload({
//         url:'http://localhost:3000/api/images',
//         data: {image: {name: $scope.image, product_id: id}}})
//         .then(function (resp) {
//           $scope.product.images.push(resp.data)
//         });
//     };
//   $scope.destroyImage = function(image) {
//     Image.remove(image).$promise.then(function() {
//       var index = $scope.product.images.indexOf(image);
//       $scope.product.images.splice(index, 1);
//     });
//   };
// }]);

// app.controller('NewProductCtrl', ['$scope', 'Product', '$state',
//   function($scope, Product, $state){

//   $scope.saveProduct = function() {
//     Product.save($scope.newProduct).$promise.then(
//     function(response) {
//       $scope.newProduct = {};
//       $state.go('product', {id: response.id, productParams: response});
//     }, function(error) {
//       $scope.errors = error.data
//     })
//   };
// }]);
// app.controller('UpdateProductCtrl', ['$scope', 'Product', '$stateParams', '$state',
//   function($scope, Product, $stateParams, $state){

//   var id = $stateParams.id
//   $scope.newProduct = Product.get({id: id})
//   $scope.saveProduct = function() {
//     Product.update($scope.newProduct).$promise.then(
//     function(response) {
//       $scope.newProduct = {};
//       $state.go('product', {id: response.id, productParams: response});
//     }, function(error) {
//       $scope.errors = error.data
//     });
//   };
// }]);
