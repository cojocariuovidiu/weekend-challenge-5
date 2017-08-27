myApp.service('ListingService', ['$http', function($http) {
    console.log('Listing service loaded');

    var self = this;
    self.listing = { list: [] };

    self.getListing = function() {
        $http.get('/listing').then(function(response) {
            self.listing.list = response.data;
            //console.log('get response service: ', self.listing);
        });
    };

    self.addListing = function(newListing) {
        //console.log('going to send this object to the server: ', newListing);
        $http.post('/listing', newListing).then(function(response) {
            console.log('service post response: ', response);
            self.getListing();
        });
    };
}]); // end  myApp.service