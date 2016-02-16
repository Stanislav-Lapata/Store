angular.module("Store")
  .controller('UpdateProductCtrl', ['$scope', 'Product', '$stateParams', '$state',
    function($scope, Product, $stateParams, $state){
    var id = $stateParams.id
    $scope.category_id = $stateParams.category_id
    $scope.newProduct = Product.get({category_id: $scope.category_id, id: id})
    $scope.saveProduct = function() {
      Product.update($scope.newProduct).$promise.then(
      function(response) {
        $scope.newProduct = {};
        $state.go('product', {category_id: $scope.category_id, id: response.id});
      }, function(error) {
        $scope.errors = error.data
      });
    };
  }]);
