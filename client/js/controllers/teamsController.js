myAppModule.controller('TeamsController', function(TeamFactory, $routeParams){
 console.log($routeParams)
})
myAppModule.controller("TeamsController", function($scope, TeamFactory){
   $scope.teams = [];

   TeamFactory.getTeams(function(teams){
      $scope.teams = teams;
   })

   $scope.addTeam = function(){
      TeamFactory.addTeam($scope.newTeam)
      $scope.newTeam = {}; 
   }

   $scope.removeTeam = function($index){
      TeamFactory.removeTeam($index);
   }
})