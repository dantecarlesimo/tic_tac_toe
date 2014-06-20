GameApp = angular.module("GameApp", [])

GameApp.controller("GamesCtrl", function($scope){
  $scope.plays = [null, null, null, 
                  null, null, null,
                  null, null, null];
  $scope.count = 0;
  $scope.message = " Click a box to play! ";

  $scope.addPlay = function(position){
    if ($scope.plays[position]){
      $scope.message = "Choose a different box!";
    } else if ($scope.count %2 == 0){
      $scope.plays[position] = "X";
      $scope.message = "Next player - GO!";
    }  else {
      $scope.plays[position] = "O";
      $scope.message = "Next player - GO!";
    }
    $scope.count += 1;
    console.log($scope.count);
    console.log($scope.plays);
  };

  $scope.score = function() {
    if ($scope.checkWinForType("X")) {
      $scope.winner = "X";
    } else if ($scope.checkWinForType("O")) {
      $scope.winner = "O";
    } else {
      $scope.winner = "No Winner Yet";
    }
  };


  $scope.checkWinForType = function(playType) {
    return $scope.verticalWin(playType)
           || $scope.horizontalWin(playType)
           || $scope.diagonalWin(playType);
  }
  /*
  0 1 2
  3 4 5
  6 7 8
  */

  $scope.verticalWin = function(playType) {
    var isWin = false;
    for (var i = 0; i < 3; i++) {
      if ($scope.plays[i] === playType
         && $scope.plays[i+3] === playType
         && $scope.plays[i+6] === playType) {
        isWin = true;
      }
    }

    return isWin;
  }


  /*
  0 1 2
  3 4 5
  6 7 8
  */
  $scope.horizontalWin = function(playType) {
    var isWin = false;
    for (var i = 0; i < 9; i+= 3) {
      if ($scope.plays[i] === playType
         && $scope.plays[i+1] === playType
         && $scope.plays[i+2] === playType) {
        isWin = true;
      }
    }

    return isWin;
  }


  $scope.diagonalWin = function(playType) {
    var isWin = false;
    if ($scope.plays[0] === playType  
         && $scope.plays[4] === playType
         && $scope.plays[8] === playType ) {
      isWin = true;
    }
    
    if ($scope.plays[2] === playType  
         && $scope.plays[4] === playType
         && $scope.plays[6] === playType ) {
      isWin = true;
    }

    return isWin;
  }
  $scope.clear = function(){
    $scope.plays = {};
    $scope.count = 0;
  };

});

