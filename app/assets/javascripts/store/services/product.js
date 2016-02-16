angular.module("Store")
  .factory('Product', ['$resource', function($resource){
    return $resource('/api/categories/:category_id/products/:id', {category_id: '@category_id', id: '@id'}, {update: {method: 'PATCH'}});
  }]);
