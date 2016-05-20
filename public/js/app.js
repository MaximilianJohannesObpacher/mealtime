/**
 * Created by MaximilianObpacher on 08.05.16.
 */
var mealtime = angular.module("mealtime", []);

mealtime.controller("HomeCtrl", function ($http) {
    var app = this;
    var url = "http://localhost:3000";

    // Catching post request
    app.searchOfferings = function(postalCode){
        
    };
});
