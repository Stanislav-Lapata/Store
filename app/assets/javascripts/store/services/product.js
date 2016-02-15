angular.module("Store")
  .factory('Product', ['$resource', function($resource){
    return $resource('/api/products/:id', {id: '@id'}, {update: {method: 'PATCH'}});
  }]);
