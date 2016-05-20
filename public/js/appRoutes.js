/**
 * Created by MaximilianObpacher on 20.05.16.
 */

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })

        // meals page that will use the NerdController
        .when('/createOffering', {
            templateUrl: 'templates/createOffering.html',
            controller: 'CreateOfferingController'
        })
        .when('/offeringsPage', {
            templateUrl: 'templates/offeringsPage.html',
            controller: 'OfferingResultsController'
        });

    $locationProvider.html5Mode(true);
}]);