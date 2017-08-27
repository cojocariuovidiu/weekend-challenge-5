//console.log('js sourced'); 

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './views/home.html',
        controller: 'NewListingController as vm'
    }).when('/rent', {
        templateUrl: './views/rent.html',
        controller: 'RentalController as vm'
    }).when('/listing', {
        templateUrl: './views/listing.html',
        controller: 'ListingController as vm'
    });
}]); // end app.config