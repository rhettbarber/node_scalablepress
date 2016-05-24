angular.module('app', ['ngRoute','ngProgressLite'])
	.controller('AppController', ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
		ngProgressLite.start();
		$http.get('/api/design').success(function(response){
			$scope.sp = response;
			console.log(response)
			ngProgressLite.done();
		});
	}]);

(function() {

	angular.module('app')
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

			$locationProvider.html5Mode(true);

			$routeProvider.when('/', {
				templateUrl: 'components/home/index.html'
			})
			// .when('/about', {
			// 	templateUrl: 'components/about/index.html'
			// })
			.otherwise({redirectTo: '/'});

	}]);

})();

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

