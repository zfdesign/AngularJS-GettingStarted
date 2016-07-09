(function() {

  var app = angular.module('githubViewer');

  var MainController = function($scope, $location) {

    // $scope.{DATA/METHOD} - exposes DATA/METHOD to the View via the Model($scope)
    $scope.search = function (username) {
        //console.log("Searching for: " + username.toLowerCase());
        $location.path("/user/" + username.toLowerCase());  
    };

    // default
    $scope.username = "Angular";
  };

  app.controller('MainController', MainController);
  
}());