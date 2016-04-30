angular.module('MonthCtrl', [])
.controller('MonthController', function($scope, $routeParams, $location, Calendar) {
  var month = moment( $routeParams.year + ' ' + $routeParams.month, 'YYYY MM');
  $scope.newEvent = {
    title: '',
    description: ''
  };

  $scope.showNewEvent= false,
  $scope.events = [];
  $scope.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $scope.monthName = month.format('MMMM');
  $scope.year = $routeParams.year;
  $scope.days = Calendar.getDays($routeParams.year, $routeParams.month);
  
  $scope.currentDay;

  $scope.showEventForm = function() {
    $scope.showNewEvent = true;
  }
  
  $scope.setDay = function(dateObj) {
    $scope.currentDay = dateObj;
    $scope.events = Calendar.events[$scope.currentDay.format('YYYYMMDD')]
  }

  $scope.addEvent = function() {
    Calendar.addEvent($scope.currentDay, $scope.newEvent);
    $scope.newEvent = {
      title: '',
      description: ''
    };
    $scope.showNewEvent = false;
  }

  $scope.deleteEvent = function(event) {
    $scope.events.splice($scope.events.indexOf(event), 1);
    Calendar.saveStorage();
  }

  $scope.editEvent = function () {
    
  }
  $scope.saveEvent = function() {

  }

  $scope.goToMonth = function(toAdd) {
    var newMonth = moment($scope.currentDay).add(toAdd, 'months')
    $location.path(newMonth.format('/YYYY/MM'))
  }


  if (moment().format('YYYY-MM') === $routeParams.year + '-' + $routeParams.month) {
    $scope.setDay(moment());
  }
  else {
    $scope.setDay(moment( {y: Number($routeParams.year), M: Number($routeParams.month) - 1, d: 1}));
  }

});