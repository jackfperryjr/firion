var app = angular.module('finalFantasyApp', []); // Initializing Angular.Js component.

app.controller('characterController', function($scope, $http) { // Controller to manage characters.
  $http.get('https://www.moogleapi.com/api/v1/characters')
    .then(function(response) {
      $scope.characters = response.data;
    });
});

let year = new Date().getFullYear(); // Getting the current full year.
document.getElementById('footer-name').innerHTML = "&copy; " + year + " jack f. perry, jr."; // Adding full year to the copyright.