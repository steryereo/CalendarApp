angular.module('MonthCtrl', []).controller('MonthController', function($scope, $routeParams) {
  var month = moment( $routeParams.year + ' ' + $routeParams.month, 'YYYY MM');
  $scope.monthName = month.format('MMMM');
});