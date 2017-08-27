//console.log('js sourced'); 

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './views/home.html'
    }).when('/rent', {
        templateUrl: './views/rent.html',
        controller: 'RentalController'
    });
}]); // end app.config