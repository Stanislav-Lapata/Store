angular.module("Store")
  .controller('NewCategoryCtrl', ['$scope', 'Category', '$state',
    function($scope, Category, $state){
      $scope.saveCategory = function() {
        Category.save($scope.newCategory).$promise.then(
        function(response) {
          $state.go('category', {id: response.id});
        }, function(error) {
          $scope.errors = error.data
        });
    };
  }]);
