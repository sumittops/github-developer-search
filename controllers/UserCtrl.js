(function(){
	var app = angular.module("githubViewer");
	
	var UserCtrl= function($scope,github,$routeParams,$location){
		var onRepos = function(data){
			$scope.repos = data;
		};
		var onLoadComplete = function(data){
			$scope.user = data;
			github.getRepos($scope.user).then(onRepos,onError);
		};
		var onError = function(reason){
			$scope.error = "Sorry! Could not load data.";
		}
		$scope.goBack = function(){
			$location.path("/main");
		}
		$scope.repoSortOrder = "+name";
		$scope.username = $routeParams.username;
		github.getUser($scope.username).then(onLoadComplete,onError);
	};
	
	app.controller("UserCtrl",UserCtrl);
}());