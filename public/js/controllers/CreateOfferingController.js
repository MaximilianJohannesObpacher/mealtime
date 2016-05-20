/**
 * Created by MaximilianObpacher on 09.05.16.
 */

var mealtime = angular.module("CreateOfferingController", []);

mealtime.controller("CreateOfferingController", function ($http) {
    var app = this;  
    var url = "http://localhost:3000";

    // Catching post request
    app.saveOffering = function (meal, chef, price) {
        $http.post(url + "/add", {meal: meal, chef: chef, price: price}).success(function () {
            loadProducts();
        })
    };

    // Setting up offerings list
    function loadProducts() {
        $http.get("http://localhost:3000").success(function (offerings) {
            app.offerings = offerings;
        });
    }
});