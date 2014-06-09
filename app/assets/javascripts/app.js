GameApp = angular.module("GameApp", [])

GameApp.controller("GamesCtrl", function($scope){
  $scope.plays = {};
  $scope.count = 0;
  $scope.errorMessage = "";

  $scope.addPlay = function(play){
    if ($scope.plays[play]){
      $scope.errorMessage = "Choose a different box!";
    } else {
      if ($scope.count %2 == 0){
      $scope.plays[play] = "X";
      }  else {
      $scope.plays[play] = "O";
      }
    }
    $scope.count += 1;
    console.log($scope.count);
    console.log($scope.plays);
  };

  $scope.score = function(){
    if ( ($scope.plays.play1 ==="X" && $scope.plays.play2 ==="X" &&  $scope.plays.play3 === "X")||
         ($scope.plays.play4 === "X" && $scope.plays.play5 === "X" && $scope.plays.play6 === "X")||
         ($scope.plays.play7 === "X" && $scope.plays.play8 === "X" && $scope.plays.play9 === "X")||
         ($scope.plays.play1 === "X" && $scope.plays.play4 === "X" && $scope.plays.play7 === "X")||
         ($scope.plays.play2 === "X" && $scope.plays.play5 === "X" && $scope.plays.play8 === "X")||
         ($scope.plays.play3 === "X" && $scope.plays.play6 === "X" && $scope.plays.play9 === "X")||
         ($scope.plays.play1 === "X" && $scope.plays.play5 === "X" && $scope.plays.play9 === "X")||
         ($scope.plays.play3 === "X" && $scope.plays.play5 === "X" && $scope.plays.play7 === "X")) {
    $scope.winner = "X";
    } else if (($scope.plays.play1 ==="O" && $scope.plays.play2 ==="O" && $scope.plays.play3 ==="O")||
         ($scope.plays.play4 ==="O" && $scope.plays.play5 ==="O" && $scope.plays.play6 ==="O")||
         ($scope.plays.play7 ==="O" && $scope.plays.play8 ==="O" && $scope.plays.play9 ==="O")||
         ($scope.plays.play1 ==="O" && $scope.plays.play4 ==="O" && $scope.plays.play7 ==="O")||
         ($scope.plays.play2 ==="O" && $scope.plays.play5 ==="O" && $scope.plays.play8 ==="O")||
         ($scope.plays.play3 ==="O" && $scope.plays.play6 ==="O" && $scope.plays.play9 ==="O")||
         ($scope.plays.play1 ==="O" && $scope.plays.play5 ==="O" && $scope.plays.play9 ==="O")||
         ($scope.plays.play3 ==="O" && $scope.plays.play5 ==="O" && $scope.plays.play7 ==="O"))  {
    $scope.winner = "O"; 
    }
  };
  $scope.clear = function(){
    $scope.plays = {};
    $scope.count = 0;
  };

});

