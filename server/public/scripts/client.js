//console.log('js sourced'); 

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/rent', {
        templateUrl: './views/rent.html'
    });
}]); // end app.config