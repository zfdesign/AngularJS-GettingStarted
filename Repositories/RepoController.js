(function () {
    // 'use strict';
    var app = angular.module('githubViewer');

    var RepoController = function ($scope, github, $routeParams) {

        // Error handler
        var errorHandler = function (data) {
            $scope.errorMessage = data.message ? data.message : "Not found";
            $scope.repoNotFound = true;
            $scope.searching = false;
        };

        var displayrepoContributors = function (contributors) {
            $scope.contributors = contributors;
        };

        // Repo details
        var getRepoDetails = function(data) {
            $scope.reponame = data.name;
            $scope.openIssuesCount = data.open_issues_count;
            $scope.repoNotFound = false;
            $scope.searching = false;
            github.getRepoContributors(data.contributors_url)
                .then(displayrepoContributors, errorHandler);
        };

        $scope.searching = true;
        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;
        github.getRepoDetails($scope.username.toLowerCase(), $scope.reponame.toLowerCase())
            .then(getRepoDetails, errorHandler);

    };

    app.controller("RepoController", RepoController);
}());