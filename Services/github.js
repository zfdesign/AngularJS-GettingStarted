(function () {

    var github = function ($http) {

        var getUserData = function (username) {
            return $http.get("https://api.github.com/users/" + username)
            .then(function (response) {
                    return response.data;
            }, function (response) {
                var errorMeassage = response.data && response.data.message ? response.data.message : "Not fond"; 
                return errorMeassage;
            }); 
        };

        var getUserRepos = function (user) {
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepoDetails = function (username, reponame) {
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
            return $http.get(repoUrl)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepoContributors = function (url) {
            return $http.get(url).then(function (response) {
                return response.data;
            });
        };

        return {
            getUserData: getUserData,
            getUserRepos: getUserRepos,
            getRepoDetails: getRepoDetails,
            getRepoContributors: getRepoContributors
        };
    };

    var module = angular.module("githubViewer");
    module.factory("github", github);

})();