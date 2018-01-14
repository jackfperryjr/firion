
// <--- Angular component to fetch and control my character list --->
var app = angular.module('charApp', []);

app.controller('charControl', function($scope, $http) {
   $http.get("characters.json")
     .then(function(response) {
	    $scope.characters = response.data;
     });
});