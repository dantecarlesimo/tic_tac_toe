GameApp = angular.module("GameApp", [])

GameApp.controller("GamesCtrl", function($scope){
  $scope.plays = {};
  $scope.count = 0;

  $scope.addPlay = function(play){
    if ($scope.count %2 == 0){
    $scope.plays[play] = "X";
    }  else {
    $scope.plays[play] = "O";
    }
    $scope.count += 1;
    console.log($scope.count);
    console.log($scope.plays);
  };

  $scope.score = function(){
    if ((($scope.plays.play1 && $scope.plays.play2 && $scope.plays.play3)||
         ($scope.plays.play4 && $scope.plays.play5 && $scope.plays.play6)||
         ($scope.plays.play7 && $scope.plays.play8 && $scope.plays.play9)||
         ($scope.plays.play1 && $scope.plays.play4 && $scope.plays.play7)||
         ($scope.plays.play2 && $scope.plays.play5 && $scope.plays.play8)||
         ($scope.plays.play3 && $scope.plays.play6 && $scope.plays.play9)||
         ($scope.plays.play1 && $scope.plays.play5 && $scope.plays.play9)||
         ($scope.plays.play3 && $scope.plays.play5 && $scope.plays.play7)) == "X") {
    $scope.winner = "X";
    } else if ((($scope.plays.play1 && $scope.plays.play2 && $scope.plays.play3)||
         ($scope.plays.play4 && $scope.plays.play5 && $scope.plays.play6)||
         ($scope.plays.play7 && $scope.plays.play8 && $scope.plays.play9)||
         ($scope.plays.play1 && $scope.plays.play4 && $scope.plays.play7)||
         ($scope.plays.play2 && $scope.plays.play5 && $scope.plays.play8)||
         ($scope.plays.play3 && $scope.plays.play6 && $scope.plays.play9)||
         ($scope.plays.play1 && $scope.plays.play5 && $scope.plays.play9)||
         ($scope.plays.play3 && $scope.plays.play5 && $scope.plays.play7)) == "O") {
    $scope.winner = "O"; 
    }
  };
  $scope.clear = function(){
    $scope.plays = {};
    $scope.count = 0;
  };

});

