(function(){
	angular.module('app')
		.directive('nav', function(){
			return {
				restrict: "A",
				templateUrl: "components/nav/nav.html",
				controller: ['$scope', function($scope){
					$scope.test = "hello hello hello";
				}]
			}
		});	
}());

