(function(){
	var app = angular.module("githubViewer",["ngRoute"]);
	app.config(function($routeProvider){
		$routeProvider
			.when('/main',{
				templateUrl: "views/main.html",
				controller:"MainCtrl"
			})
			.when('/user/:username',{
				templateUrl:"views/userdetail.html",
				controller:"UserCtrl"
			})
			.otherwise({redirectTo:"/main"});
	});
}());