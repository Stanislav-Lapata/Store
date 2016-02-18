angular.module("Store", ['ngResource', 'ui.router', 'ngFileUpload', 'ng-token-auth'])
  .config(["$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('categories', {
          url: "/",
          templateUrl: "all_categories.html",
          controller: "CategoriesCtrl"
        })
        .state('category', {
          url: "/categories/{id:int}",
          templateUrl: "show_category.html",
          controller: "CategoryCtrl"
        })
        .state('newCategory', {
          url: "/categories/new",
          templateUrl: "new_category.html",
          controller: "NewCategoryCtrl"
        })
        .state('updateCategory', {
          url: "/categories/{id:int}/edit",
          templateUrl: "new_category.html",
          controller: "UpdateCategoryCtrl"
        })
        .state('product', {
          url: "/categories/{category_id:int}/products/{id:int}",
          templateUrl: "show_product.html",
          controller: "ProductCtrl"
        })
        .state('newProduct', {
          url: "/categories/{category_id:int}/products/new",
          templateUrl: "new_product.html",
          controller: "NewProductCtrl"
        })
        .state('updateProduct', {
          url: "/categories/{category_id:int}/products/{id:int}/edit",
          templateUrl: "new_product.html",
          controller: "UpdateProductCtrl"
        })
        .state('registration', {
          url: "/registration",
          templateUrl: "registrations.html",
          controller: "RegistrationCtrl"
        })
        .state('signIn', {
          url: "/signin",
          templateUrl: "sign_in.html",
          controller: "SignInCtrl"
        })
  }])
  .config(function($authProvider) {
        $authProvider.configure({
            apiUrl: '/api/v1',
            emailRegistrationPath: '/auth',
            signOutUrl: '/auth/sign_out'
        });
    });
