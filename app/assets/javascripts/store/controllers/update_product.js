angular.module("Store")
  .controller('UpdateProductCtrl', ['$scope', 'Product', '$stateParams', '$state',
    function($scope, Product, $stateParams, $state){

    var id = $stateParams.id
    $scope.newProduct = Product.get({id: id})
    $scope.saveProduct = function() {
      Product.update($scope.newProduct).$promise.then(
      function(response) {
        $scope.newProduct = {};
        $state.go('product', {id: response.id, productParams: response});
      }, function(error) {
        $scope.errors = error.data
      });
    };
  }]);
