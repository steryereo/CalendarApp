angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/:year/:month', {
    templateUrl: 'views/month.html',
    controller: 'MonthController'
  })
  .otherwise({
    redirectTo: '/' + new Date().getFullYear() + '/' + new Date().getMonth()
  });

  $locationProvider.html5Mode(true);

}]);
