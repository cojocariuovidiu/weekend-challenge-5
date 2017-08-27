myApp.controller('RentalController', ['RentalService',
    function(RentalService) {
        // console.log('Rental Controller loaded');

        var self = this;
        self.newRental = {};
        RentalService.getRental();
        self.rentalUnits = RentalService.rentalUnits;
        // console.log(self.rentalUnits);

    }
]);