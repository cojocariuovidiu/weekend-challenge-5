myApp.controller('RentalController', ['RentalService',
    function(RentalService) {
        console.log('Rental Controller loaded');

        var self = this;
        RentalService.getRental();
        self.gotRentals = RentalService.gotRentals;

    }
])