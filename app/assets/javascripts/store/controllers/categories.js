angular.module("Store")
  .controller('CategoriesCtrl', ['$scope', 'Category', function($scope, Category){
    $scope.categories = Category.query();
    $scope.destroyCategory = function(category) {
      Category.remove({id: category.id}).$promise.then(function() {
        var index = $scope.categories.indexOf(category);
        $scope.categories.splice(index, 1);
      });
    };
  }]);
