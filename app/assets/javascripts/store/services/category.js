angular.module("Store")
  .factory('Category', ['$resource', function($resource){
    return $resource('/api/v1/categories/:id', {id: '@id'}, {update: {method: 'PATCH'}});
  }]);
