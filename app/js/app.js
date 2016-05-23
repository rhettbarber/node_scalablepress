angular.module('app', ['ngProgressLite'])
	.controller('AppController', ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
		ngProgressLite.start();
		$http.get('/api/design').success(function(response){
			$scope.sp = response;
			console.log(response)
			ngProgressLite.done();
		});
	}]);

