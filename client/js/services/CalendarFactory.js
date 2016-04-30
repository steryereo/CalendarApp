angular.module('CalendarFactory', []).factory('Calendar', ['$http', function($http) {
  var events;
  if (localStorage) {
    events = JSON.parse(localStorage.getItem('nickechols.calendar.events'));
  }
  events = events || {};

  var getDays = function(year, month) {
    var firstOfMonth = moment({ y: Number(year), M: Number(month) - 1, d: 1 });
    var dayOfWeek = firstOfMonth.day(); // gets number 0-6 : sun-sat
    var days = [];
    var daysInMonth = firstOfMonth.daysInMonth();
    var day = dayOfWeek * -1 + 1; // start on the preceding sunday
    while (day <= daysInMonth) {
      var dateObj = moment(firstOfMonth).date(day);
      // initialize events for day
      events[dateObj.format('YYYYMMDD')] = events[dateObj.format('YYYYMMDD')] || [];
      days.push({
        dateObj: dateObj,
        index: day,
        events: events[dateObj.format('YYYYMMDD')],
        today: moment().isSame(moment({ y: Number(year), M: Number(month) - 1, d: day }), 'day')
      });
      day++;
    }
    return days;
  }

  var addEvent = function(dateObj, event) {
    events[dateObj.format('YYYYMMDD')] = events[dateObj.format('YYYYMMDD')] || [];
    events[dateObj.format('YYYYMMDD')].push(event);
    saveStorage();

  }
  var saveStorage = function() {
    if (localStorage) {
      localStorage.setItem('nickechols.calendar.events', JSON.stringify(events));
    }
  }

  return {
    getDays: getDays,
    addEvent: addEvent,
    saveStorage: saveStorage,
    events: events
  }

}]);
