angular.module("Store")
  .controller('CategoryCtrl', ['$scope', 'Category', 'Product', '$stateParams',
    function($scope, Category, Product, $stateParams){
      var id = $stateParams.id;
      Category.get({id: id}).$promise.then(function(resp) {
        $scope.category = resp
      })
      $scope.destroyProduct = function(product) {
        Product.remove({category_id: id, id: product.id}).$promise.then(function() {
          var index = $scope.category.products.indexOf(product);
          $scope.category.products.splice(index, 1);
      });
    };
  }]);
