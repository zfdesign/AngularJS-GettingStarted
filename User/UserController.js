(function () {

    var app = angular.module('githubViewer');

    var UserController = function ($scope, github, $routeParams) {

        // Error handling
        var onGetError = function (error) {
            $scope.error = error ? error : "Not found";
            $scope.notFound = true;
        };


        // Fetching repositories
        var onGetReposComplete = function (data) {
            $scope.repos = data;
        };
        var getRepos = function () {
            github.getUserRepos($scope.user)
                .then(onGetReposComplete, onGetError);
        };

        // Fetching user data
        var onGetUserComplete = function (data) {
            $scope.user = data && typeof  data === "object" ? data : undefined;
            $scope.notFound = !$scope.user;
            if ($scope.user) getRepos($scope.user);
        };

        // Model props
        $scope.notFound = true;
        $scope.repoSortOrder = "-stargazers_count";

        $scope.username = $routeParams.username;
        github.getUserData($scope.username).then(onGetUserComplete, onGetError);

    };

    app.controller('UserController', UserController);

} ());