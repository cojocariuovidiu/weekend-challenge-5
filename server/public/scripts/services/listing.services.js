myApp.service('ListingService', ['$http', function($http) {
    console.log('Listing service loaded');

    var self = this;
    self.listing = { list: [] };

    self.getListing = function() {
        $http.get('/listing').then(function(response) {
            self.listing.list = response.data;
            console.log('get response service: ', self.listing);
        });
    };
}]); // end  myApp.service