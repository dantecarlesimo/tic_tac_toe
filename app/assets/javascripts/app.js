GameApp = angular.module("GameApp", [])



GameApp.controller("GamesCtrl", function($scope){
  $scope.plays = {};
  $scope.count = 0;

  $scope.addPlay1 = function(){
    // $scope.plays.push($scope.newPlay);
    if ($scope.count %2 == 0){
    $scope.play1 = "X";
    }  else {
    $scope.play1 = "O";
    }
    $scope.count += 1;
    $scope.plays.play1 = $scope.play1;
    console.log($scope.count);
    console.log($scope.play1);
    console.log($scope.count %2)
  };
    $scope.addPlay2 = function(){
    // $scope.plays.push($scope.newPlay);
    if ($scope.count %2 == 0){
    $scope.play2 = "X";
    }  else {
    $scope.play2 = "O";
    }
    $scope.count += 1;
    $scope.plays.play2 = $scope.play2;
    console.log($scope.count);
    console.log($scope.plays);
      console.log($scope.count %2)

  };
    $scope.addPlay3 = function(){
    // $scope.plays.push($scope.newPlay);
    if ($scope.count %2 == 0){
    $scope.play3 = "X";
    }  else {
    $scope.play3 = "O";
    }
    $scope.count += 1;
    $scope.plays.play3 = $scope.play3;
    console.log($scope.count);
    console.log($scope.plays);
        console.log($scope.count %2)

  };
    $scope.addPlay4 = function(){
    // $scope.plays.push($scope.newPlay);
    if ($scope.count %2 === 0){
    $scope.play4 = "X";
    }  else {
    $scope.play4 = "O";
    }
    $scope.count += 1;
    $scope.plays.play4 = $scope.play4;
    console.log($scope.count);
    console.log($scope.plays);
  };
    $scope.addPlay5 = function(){
    // $scope.plays.push($scope.newPlay);
    if ($scope.count %2 === 0){
    $scope.play5 = "X";
    }  else {
    $scope.play5 = "O";
    }
    $scope.count += 1;
    $scope.plays.play5 = $scope.play5;
    console.log($scope.count);
    console.log($scope.plays);
  };
    $scope.addPlay6 = function(){
    // $scope.plays.push($scope.newPlay);
    if ($scope.count %2 === 0){
    $scope.play6 = "X";
    }  else {
    $scope.play6 = "O";
    }
    $scope.count += 1;
    $scope.plays.play6 = $scope.play6;
    console.log($scope.count);
    console.log($scope.plays);
  };
    $scope.addPlay7 = function(){
    // $scope.plays.push($scope.newPlay);
    if ($scope.count %2 === 0){
    $scope.play7 = "X";
    }  else {
    $scope.play7 = "O";
    }
    $scope.count += 1;

    $scope.plays.play7 = $scope.play7;
    console.log($scope.count);
    console.log($scope.plays);
  };
    $scope.addPlay8 = function(){
    // $scope.plays.push($scope.newPlay);
    if ($scope.count %2 === 0){
    $scope.play8 = "X";
    }  else {
    $scope.play8 = "O";
    }
    $scope.count += 1;

    $scope.plays.play8 = $scope.play8;
    console.log($scope.count);
    console.log($scope.plays);
  };
    $scope.addPlay9 = function(){
    // $scope.plays.push($scope.newPlay);
    if ($scope.count %2 == 0){
    $scope.play9 = "X";
    }  else {
    $scope.play9 = "O";
    }
    $scope.count += 1;

    $scope.plays.play9 = $scope.play9;
    console.log($scope.count);
    console.log($scope.plays);
  };
    $scope.score = function(){
    if (($scope.plays.play1 && $scope.plays.play2 && $scope.plays.play3) == "X") {
      $scope.winner = "X";
    } else {
     $scope.winner = "NONE"
    }
  };

});



// BookApp = angular.module("BookApp", [])


// BookApp.controller("BooksCtrl", ["$scope", "$http", ($scope, $http)->
//   console.log "inside controller"
//   $scope.books = []

//   $http.get("/books.json").success (data) ->
//     $scope.books = data

//   $scope.addBook = ->
//     console.log "add book button"
//     console.log $scope.newBook
//     $http.post("/books.json", $scope.newBook).success (data)->
//       console.log "book added!"
//       $scope.newBook = {}
//       $scope.books.push(data) #adds new book to books array to display on page
    
//   $scope.editBook = ->
//     $http.put("/books/#{@book.id}.json", @book).success (data)=>
//       console.log "Book is edited!"

//   $scope.deleteBook = ->
//     console.log "delete pushed"
//     console.log @book # @book==this.book (you can use either)
//     $http.delete("/books/#{@book.id}.json").success (data) => #same as "/books/"+@book.id+".json"
//       console.log "book deleted"
//       $scope.books.splice(this.$index, 1)
// ])


// # below code is needed to get around security tokens to create/update/destroy books
// BookApp.config(["$httpProvider", ($httpProvider)->
//   $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token').attr('content')
// ])