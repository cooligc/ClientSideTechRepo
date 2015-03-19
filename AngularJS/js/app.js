var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
	$scope.contacts=[];
	$scope.add=function(){
		$scope.contacts.push($scope.contact);
		$scope.contact="";
	}
});
