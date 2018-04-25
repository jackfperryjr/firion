// <-- Created by Jack F. Perry, Jr. -->
// =====================================

// <--- Initializing Angular component --->
// ========================================
var app = angular.module('finalFantasyApp', []);

// <--- Angular controller to manage the characters --->
// =====================================================
app.controller('characterController', function($scope, $http) {
  $http.get('characters.json')
    .then(function(response) {
      $scope.characters = response.data;
    });
});
// <-- Adding current year copyright --->
// ======================================
let year = new Date().getFullYear();
document.getElementById('footer-name').innerHTML = "&copy; " + year + " jack f. perry, jr.";
// ====================
// <-- That's that. -->