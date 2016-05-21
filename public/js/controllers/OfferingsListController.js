/**
 * Created by MaximilianObpacher on 09.05.16.
 */

var mealtime = angular.module("OfferingsResultsController", []);

mealtime.controller("OfferingResultsController", function ($http) {
    var app = this;

    loadProducts();
    
    // Setting up offerings list
    function loadProducts() {
        $http.get("http://localhost:3000/api/meals").success(function (offerings) {
            app.offerings = offerings;
        });
    }
});