angular.module("Store")
  .controller('CategoryCtrl', ['$scope', 'Category', 'Product', '$stateParams',
    function($scope, Category, Product, $stateParams){
      var id = $stateParams.id;
      $scope.category = Category.get({id: id});
      $scope.destroyProduct = function(product) {
        Product.remove({category_id: id, id: product.id}).$promise.then(function() {
          var index = $scope.category.products.indexOf(product);
          $scope.category.products.splice(index, 1);
      });
    };
  }]);
