angular.module("Store")
  .controller('NewProductCtrl', ['$scope', 'Product', '$state', '$stateParams',
    function($scope, Product, $state, $stateParams){
      $scope.category_id = $stateParams.category_id
      $scope.saveProduct = function() {
        Product.save({category_id: $scope.category_id, product: $scope.newProduct}).$promise.then(
        function(response) {
          $state.go('product', {category_id: $scope.category_id, id: response.id});
        }, function(error) {
          $scope.errors = error.data
        });
    };
  }]);
