(function(){
	var app = angular.module("githubViewer");
	
	var MainCtrl= function($scope,$interval,$location){
		var decrementCount = function(){
			$scope.countdown -= 1;
			if($scope.countdown < 1){
				$scope.username = "angular";
				$scope.search($scope.username);
			}
		}
		var countdownObject = null;
		var startCountdown = function(){
			countdownObject = $interval(decrementCount,1000,$scope.countdown);
		}
		$scope.search = function(username){
			if(countdownObject){
				$interval.cancel(countdownObject);
				$scope.countdown = null;
			}
			$location.path("/user/"+username);
		}
		$scope.countdown = 10;
		$scope.username = "";
		startCountdown();
	};
	app.controller("MainCtrl",MainCtrl);
}());