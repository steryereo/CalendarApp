angular.module('CalendarFactory', []).factory('Calendar', ['$http', function($http) {

    return {
        get : function() {
            return $http.get('/api/nerds');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }
    }       

}]);