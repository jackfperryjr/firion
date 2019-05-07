$(document).ready(function(){
  let year = new Date().getFullYear(); // Getting the current full year.
  let search = $("#search");
  search.on("keyup", function(){
    if ($(this).val().length > 2) {
      $("#char-card").show();
    } else {
      $("#char-card").hide();
    }
  }).keyup();
  $("#footer-name").innerHTML = "&copy; " + year + " jack f. perry, jr."; // Adding full year to the copyright.
})

let app = angular.module('finalFantasyApp', []); // Initializing Angular.Js component.

app.controller("characterController", function($scope, $http) { // Controller to manage characters.
  $http.get("https://www.moogleapi.com/api/v1/characters")
    .then(function(response) {
      $scope.characters = response.data;
    });
});

