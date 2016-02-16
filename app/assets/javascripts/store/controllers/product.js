angular.module("Store")
  .controller('ProductCtrl', ['$scope', 'Product', '$stateParams', 'Upload', 'Image',
    function($scope, Product, $stateParams, Upload, Image){
      var id = $stateParams.id;
      $scope.category_id = $stateParams.category_id
      Product.get({category_id: $scope.category_id, id: id})
      .$promise.then(function(resp) {
        $scope.product = resp
        $scope.product.images[0].active = true
      });
      $scope.addImage = function() {
        Upload.upload({
          url:'http://localhost:3000/api/v1/images',
          data: {image: {name: $scope.image, product_id: id}}})
          .then(function (resp) {
            $scope.product.images.push(resp.data)
            $scope.product.images[0].active = true
          });
        };
      $scope.destroyImage = function(image) {
        Image.remove(image).$promise.then(function() {
          var index = $scope.product.images.indexOf(image);
          $scope.product.images.splice(index, 1);
          $scope.product.images[0].next = true
          $scope.product.images[1].active = true
        }, function(errors) {
          $scope.errors = errors.data
        });
      };
  }]);
