angular.module("Store")
  .controller('ProductCtrl', ['$scope', 'Product', '$stateParams', 'Upload', 'Image',
    function($scope, Product, $stateParams, Upload, Image){
      var id = $stateParams.id;
      if ($scope.product = $stateParams.productParams)
        {$scope.product.images = []}
      else {
        $scope.product = Product.get({id: id})};
        $scope.addImage = function() {
          Upload.upload({
            url:'http://localhost:3000/api/images',
            data: {image: {name: $scope.image, product_id: id}}})
            .then(function (resp) {
              $scope.product.images.push(resp.data)
            });
        };
      $scope.destroyImage = function(image) {
        Image.remove(image).$promise.then(function() {
          var index = $scope.product.images.indexOf(image);
          $scope.product.images.splice(index, 1);
        });
      };
  }]);
