angular.module('MonthCtrl', [])
.controller('MonthController', function($scope, $routeParams, Calendar) {

  var month = moment( $routeParams.year + ' ' + $routeParams.month, 'YYYY MM');
  $scope.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $scope.monthName = month.format('MMMM');
  $scope.year = $routeParams.year;
  $scope.days = Calendar.getDays($routeParams.year, $routeParams.month);
});