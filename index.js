
// <--- Created by Jack F. Perry, Jr. --->

/*
// <--- Function to help position and style the tooltips --->
(function() {
    var ID = "tooltip";
    var CLS_ON = "tooltip_ON";
    var FOLLOW = true;
    var DATA = "_tooltip";
    var OFFSET_X = -220;
    var OFFSET_Y = 20;
    
    showAt = function(e) {
        var ntop = e.pageY + OFFSET_Y, nleft = e.pageX + OFFSET_X;
        $("#" + ID).html($(e.target).data(DATA)).css({
            position: "absolute", top: ntop, left: nleft
        }).show();
    };
    $(document).on("mouseenter", "*[title]", function(e) {
        $(this).data(DATA, $(this).attr("title"));
        $(this).removeAttr("title").addClass(CLS_ON);
        $("<div id='" + ID + "' />").appendTo("body");
        showAt(e);
    });
    $(document).on("mouseleave", "." + CLS_ON, function(e) {
        $(this).attr("title", $(this).data(DATA)).removeClass(CLS_ON);
        $("#" + ID).remove();
    });
    if(FOLLOW) { 
      $(document).on("mousemove", "." + CLS_ON, showAt); 
    }
  }
());
*/

// <--- Angular component to fetch and control character list --->
var app = angular.module('finalFantasyApp', []);

// <--- Angular controller to manage the characters --->
app.controller('characterController', function($scope, $http) {
  $http.get('characters.json')
    .then(function(response) {
      $scope.characters = response.data;
    });
  });

/*****************************************************

// <--- Angular controller to manage the chocobos --->
app.controller('chocoboController', function($scope, $http) {
  $http.get('chocobos.json')
    .then(function(response) {
      $scope.chocobos = response.data;

      // <--- Setting initial statuses --->
      $scope.current = 0;
      $scope.chocodex = false;
      $scope.chococard = false;
      $scope.chocoinfo = false;
      $scope.chocoimage = false; 
      $scope.chocobutton = false;   
      $scope.floatingimage = true;

      //<--- Function to hide floating image and show chocoDex --->
      $scope.chocoDex = function() {
        $scope.chocodex = true;
        $scope.chococard = true;
        $scope.chocoimage = true;
        $scope.chocobutton = true;
        $scope.chocoinfo = false;
        $scope.floatingimage = false;
      },

      // <--- Function to show chocobo info --->
      $scope.showInfo = function() {
        $scope.chocoinfo = true; 
        $scope.chocoimage = false;         
      },

      // <--- Function to show chocobo image --->
      $scope.showImage = function() {
        $scope.chocoimage = true;
        $scope.chocoinfo = false;        
      },

      // <--- Function to move to the next chocobo --->
      $scope.next = function() {
        $scope.current = ($scope.current + 1) % $scope.chocobos.length;
      },

      // <--- Function to move to the previous chocobo --->
      $scope.previous = function() {
        $scope.current = ($scope.current - 1) % $scope.chocobos.length;
        if ($scope.current < 0) {
          $scope.current = 9;
        }
      },

      // <--- Function to hide the chocoDex and show the floating image --->
      $scope.back = function() {
        $scope.chocodex = false;
        $scope.chocobutton = false;
        $scope.floatingimage = true;
      }
  });
});

*****************************************************/ 

// <--- Angular controller to manage the monsters --->
app.controller('monsterController', function($scope, $http) {
  $http.get('monsters.json')
    .then(function(response) {
      $scope.monsters = response.data;
      $scope.bestiary = false;
      $scope.floatingimage = true;
      $scope.floatingimage2 = false;

      $scope.showBestiary = function() {
        $scope.bestiary = true;
        $scope.monstercard = false;
        $scope.monsterimage = true;
        $scope.monsterinfo = false; 
        $scope.monsterbutton = true;
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

      $scope.back = function() {
        $scope.bestiary = false;
        $scope.monstercard = false;
        $scope.monsterinfo = false;
        $scope.monsterimage = false;
        $scope.monsterbutton = false;
        $scope.floatingimage = true;
        $scope.floatingimage2 = false;
      }
  });
}); 