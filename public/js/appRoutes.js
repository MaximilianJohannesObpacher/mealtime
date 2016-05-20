/**
 * Created by MaximilianObpacher on 20.05.16.
 */

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'public/templates/index.html',
            controller: 'HomeController'
        })

        // meals page that will use the NerdController
        .when('/createOffering', {
            templateUrl: 'public/templates/index.html',
            controller: 'CreateOfferingCtrl'
        });

    $locationProvider.html5Mode(true);

}]);