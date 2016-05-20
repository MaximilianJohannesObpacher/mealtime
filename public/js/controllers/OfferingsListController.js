/**
 * Created by MaximilianObpacher on 09.05.16.
 */

var mealtime = angular.module("mealtime", []);

mealtime.controller("OfferingResultsController", function ($http) {
    var app = this;
    var url = "http://localhost:3000";
    
    loadProducts();
    
    // Setting up offerings list
    function loadProducts() {
        $http.get("http://localhost:3000").success(function (offerings) {
            app.offerings = offerings;
        });
    }
});