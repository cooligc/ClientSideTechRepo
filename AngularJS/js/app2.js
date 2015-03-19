var app2= angular.module('contactApp',['ngRoute']);
//To Render the View
app2.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	when('/add', {
        templateUrl: 'templates/add.html',
        controller: 'ContactBookController'
      }).
      when('/show', {
        templateUrl: 'templates/show.html',
        controller: 'ContactBookController'
      }).
      otherwise({
        redirectTo: '/AppController.html'
      });
  }]);
  
  
app2.controller('ContactController', function($scope) {
	$scope.contacts=[];
	$scope.add=function(){
		$scope.contacts.push($scope.contact);
		$scope.contact="";
	}
});