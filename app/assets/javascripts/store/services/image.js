angular.module("Store")
  .factory('Image', ['$resource', function($resource){
    return $resource('/api/v1/images/:id', {id: '@id'});
  }]);
