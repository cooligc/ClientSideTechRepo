var app = angular.module('myApp', []);
app.controller('MyController',function($scope){
	$scope.contacts=['Sitakanta','Chaudhury'];
	$scope.add=function(){
		$scope.contacts.push($scope.contact);
		$scope.contact="";
	}
});

function ContactController($scope) {
    $scope.contacts = ["viralpatel.net@gmail.com", "hello@email.com"];
    
    $scope.add = function() {
        $scope.contacts.push($scope.newcontact);
		$scope.newcontact = "";
    }
}