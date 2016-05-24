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
