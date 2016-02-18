angular.module("Store")
  .controller('RegistrationCtrl', ['$scope', '$auth', '$state', function($scope, $auth, $state){
    console.log($auth.user)
    $scope.registrationForm = function() {
      $auth.submitRegistration($scope.newUser)
        .then(function(resp) {
          $state.go('categories')
        })
        .catch(function(resp) {
          console.log(resp)
          $scope.errors = resp.data.errors
        });
    };
  }]);
