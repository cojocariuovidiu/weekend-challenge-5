myApp.controller('ListingController', ['ListingService',
    function(ListingService) {
        // console.log('Listing Controller loaded');

        var self = this;
        // self.newListing = {};
        ListingService.getListing();
        self.listing = ListingService.listing;
        // console.log(self.listing);

    }
]);