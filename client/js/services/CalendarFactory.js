angular.module('CalendarFactory', []).factory('Calendar', ['$http', function($http) { 

  return {
    getDays: function(year, month) {
      var firstOfMonth = moment( {y: Number(year), m: Number(month), d: 1});
      var dayOfWeek = firstOfMonth.day(); // gets number 0-6 : sun-sat
      var days = [];
      var daysInMonth = firstOfMonth.daysInMonth();
      var day = dayOfWeek * -1 + 1; // start on the preceding sunday
      while (day <= daysInMonth) {
        days.push({
          dateObj: firstOfMonth.date(day),
          index: day
        });
        day++;
      }
      return days;
    },

  //   get: function() {
  //     return $http.get('/api/nerds');
  //   },


  //   // these will work when more API routes are defined on the Node side of things
  //   // call to POST and create a new nerd
  //   create: function(nerdData) {
  //     return $http.post('/api/nerds', nerdData);
  //   },

  //   // call to DELETE a nerd
  //   delete: function(id) {
  //     return $http.delete('/api/nerds/' + id);
  //   }
  }

}]);
