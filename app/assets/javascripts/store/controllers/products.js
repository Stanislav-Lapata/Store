angular.module("Store")
  .controller('ProductsCtrl', ['$scope', 'Product', function($scope, Product){
    $scope.products = Product.query();
    $scope.destroyProduct = function(product) {
      Product.remove({id: product.id}).$promise.then(function() {
        var index = $scope.products.indexOf(product);
        $scope.products.splice(index, 1);
      });
    };
  }]);
