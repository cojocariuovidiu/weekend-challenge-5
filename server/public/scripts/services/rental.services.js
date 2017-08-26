myApp.service('RentalService', ['$http', function($http) {
    console.log('Person service loaded');

    var self = this;
    self.rentalUnits = { list: [] };
    self.getRental = function() {
        $http.get('/rent').then(function(response) {
            self.rentalUnits.list = response.data;
        });
    }
}]); // end  myApp.service