var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({
    city: { type: String },
    cost: { type: Number },
    sqft: { type: Number }
}, {
    collection: 'listings'
});

module.exports = mongoose.model('Listing', listingSchema);