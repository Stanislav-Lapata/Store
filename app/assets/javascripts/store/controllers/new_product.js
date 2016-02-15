angular.module("Store")
  .controller('NewProductCtrl', ['$scope', 'Product', '$state',
    function($scope, Product, $state){
      $scope.saveProduct = function() {
        Product.save($scope.newProduct).$promise.then(
        function(response) {
          $scope.newProduct = {};
          $state.go('product', {id: response.id, productParams: response});
        }, function(error) {
          $scope.errors = error.data
        });
    };
  }]);
