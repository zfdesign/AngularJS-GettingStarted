(function() {

  var app = angular.module('githubViewer', ["ngRoute"]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "Main/main.html",
        controller: "MainController" 
      })
      .when("/user/:username", {
        templateUrl: "User/user.html",
        controller: "UserController"
      })
      .when("/repo/:username/:reponame", {
        templateUrl: "Repositories/repo.html",
        controller: "RepoController"
      })
      .otherwise({redirectTo: "/main"});
  });
  
}());