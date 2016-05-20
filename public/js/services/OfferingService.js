/**
 * Created by MaximilianObpacher on 20.05.16.
 */
// public/js/services/NerdService.js
// 
angular.module('OfferingService', []).factory('Meal', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/meals');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new Meal
        create : function(mealData) {
            return $http.post('/api/meals', mealData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/meals/' + id);
        }
    }

}]);