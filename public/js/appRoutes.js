/**
 * Created by MaximilianObpacher on 20.05.16.
 */

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })

        // meals page that will use the NerdController
        .when('/createOffering', {
            templateUrl: 'views/createOffering.html',
            controller: 'CreateOfferingController'
        })

        .when('/offeringsPage', {
            templateUrl: 'views/offeringsPage.html',
            controller: 'OfferingResultsController'
        });

    $locationProvider.html5Mode(true);
}]);