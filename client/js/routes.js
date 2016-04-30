angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/:year/:month', {
    templateUrl: 'views/month.html',
    controller: 'MonthController'
  })
  .otherwise({
    redirectTo: '/' + moment().format('YYYY') + '/' + moment().format('MM')
  });

  $locationProvider.html5Mode(true);
}]);
