myApp.service('RentalService', ['$http', function($http) {
    console.log('Rental service loaded');

    var self = this;
    self.rentalUnits = { list: [] };

    self.getRental = function() {
        $http.get('/rent').then(function(response) {
            self.rentalUnits.list = response.data;
            //console.log('get response service: ', self.rentalUnits);
        });
    };

    self.addRental = function(newRental) {
        //console.log('going to send this object to the server: ', newListing);
        $http.post('/rent', newRental).then(function(response) {
            console.log('service post response: ', response);
            self.getRental();
        });
    };

    self.deleteRental = function(rentalId) {
        $http.delete('/rent/' + rentalId).then(function(response) {
            self.getRental();
        });
    }
}]); // end  myApp.service