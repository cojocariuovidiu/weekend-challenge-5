var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentalSchema = new Schema({
    city: { type: String },
    rent: { type: Number },
    sqft: { type: Number }
});

module.exports = mongoose.model('Rent', rentalSchema);