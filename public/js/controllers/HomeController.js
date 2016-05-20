/**
 * Created by MaximilianObpacher on 20.05.16.
 */

var mealtime = angular.module("HomeController", []);

mealtime.controller("HomeController", function ($http) {
    var app = this;
    var url = "http://localhost:3000";

    // Catching post request
    app.searchOfferings = function (postalCode) {

    };
});