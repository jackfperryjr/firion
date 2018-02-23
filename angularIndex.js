
// <--- Created by Jack F. Perry, Jr. --->

// <--- Initializing Angular component --->
var app = angular.module('finalFantasyApp', []);

// <--- Angular controller to manage the characters --->
app.controller('characterController', function($scope, $http) {
  $http.get('characters.json')
    .then(function(response) {
      $scope.characters = response.data;
    });
  });

// <--- Angular controller to manage the monsters --->
app.controller('monsterController', function($scope, $http) {
  $http.get('monsters.json')
    .then(function(response) {
      $scope.monsters = response.data;

      // <--- Setting initial statuses --->
      $scope.monsterAry = false;
      $scope.monstercard = false;
      $scope.monsterimage = false;
      $scope.monsterinfo = false;
      $scope.floatingimage = true;
      $scope.floatingimage2 = false;

      // <--- Function to open the monsterAry --->
      $scope.showMonsterAry = function() {
        $scope.monsterAry = true;
        $scope.monstercard = false;
        $scope.monsterimage = true;
        $scope.monsterinfo = false; 
        $scope.floatingimage = false;
        $scope.floatingimage2 = true;        
      },

      // <--- Function to show monster info --->
      $scope.showMonsterInfo = function() {
        $scope.monsterinfo = true; 
        $scope.monsterimage = false; 
      },

      // <--- Function to show mosnter image --->
      $scope.showMonsterImage = function() {
        $scope.monsterimage = true;
        $scope.monsterinfo = false;
      },

      // <--- Function to close the monsterAry --->
      $scope.closeMonsterAry = function() {
        $scope.monsterAry = false;
        $scope.monstercard = false;
        $scope.monsterinfo = false;
        $scope.monsterimage = false;
        $scope.floatingimage = true;
        $scope.floatingimage2 = false;
        $scope.search = null;
      }
  });
}); 