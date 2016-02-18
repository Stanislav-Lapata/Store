angular.module("Store")
  .controller('SignInCtrl', ['$scope', '$auth', '$state', function($scope, $auth, $state){
    $scope.signInForm = function() {
      $auth.submitLogin($scope.signInUser)
        .then(function(resp) {
          $state.go('categories')
        })
        .catch(function(resp) {
          console.log(resp)
          $scope.errors = resp.errors
        });
    };
  }]);
