angular.module("Store")
  .factory('Image', ['$resource', function($resource){
    return $resource('/api/images/:id', {id: '@id'});
  }]);
