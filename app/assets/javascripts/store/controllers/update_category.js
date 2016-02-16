angular.module("Store")
  .controller('UpdateCategoryCtrl', ['$scope', 'Category', '$state', '$stateParams',
    function($scope, Category, $state, $stateParams){
    var id = $stateParams.id
    $scope.newCategory = Category.get({id: id})
    $scope.saveCategory = function() {
      Category.update($scope.newCategory).$promise.then(
      function(response) {
        $scope.newCategory = {};
        $state.go('category', {id: response.id});
      }, function(error) {
        $scope.errors = error.data
      });
    };
  }]);
