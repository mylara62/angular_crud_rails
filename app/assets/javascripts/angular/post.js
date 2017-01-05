var postApp = angular.module('postapplication', ['ngRoute', 'ngResource']);

postApp.config([
 '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
   $routeProvider.when('/posts',{
     templateUrl: '/assets/posts/index.html',
     controller: 'PostCtrl'
   });
   $routeProvider.when('/posts/new', {
     templateUrl: '/assets/posts/new.html',
     controller: 'PostCtrl'
   });
   $routeProvider.when('/posts/:id/edit', {
	  templateUrl: '/assets/posts/edit.html',
	  controller: 'PostCtrl'
   });
   $routeProvider.when('/posts/:id/show', {
    templateUrl: '/assets/posts/show.html',
    controller: 'PostCtrl'
   });
   $routeProvider.otherwise({
	 redirectTo: '/posts'
	});
  }
]);




