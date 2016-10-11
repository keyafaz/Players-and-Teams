myAppModule.config(function ($routeProvider) {
		$routeProvider
	        .when('/players',{
	            templateUrl: "partials/players.html"
	        })
	        .when('/teams',{
	            templateUrl: "partials/teams.html"
	        })
	        .when("/associations", {
         		templateUrl: "partials/associations.html"
      		})
      		.when('/:teamname',{
  templateUrl: 'partials/teams.html'
 })
	        .otherwise({
	          redirectTo: '/players'
	        });
	    })