myApp.controller('ListingController', ['ListingService',
    function(ListingService) {
        // console.log('Listing Controller loaded');

        var self = this;
        self.newListing = {};
        //console.log('controller listing: ', self.newListing)
        ListingService.getListing();
        self.listing = ListingService.listing;
        // console.log(self.listing);

        self.addListing = function() {
            //console.log('clicked to add new listing');
            ListingService.addListing(self.newListing);
        };
    }
]);