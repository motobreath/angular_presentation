angular.module('todoApp', [
    'ngRoute', 
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/route1', {
        templateUrl: 'partial.route1.html',
        controller: 'Route1Ctrl'
      }).
      when('/route2', {
        templateUrl: 'partial.route2.html',
        controller: 'Route2Ctrl'
      })
  }]).
controller("Route1Ctrl",function($scope){
	alert("route 1")
}).
controller("Route2Ctrl",function($scope){
	alert("route 2")
});