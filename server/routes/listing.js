var express = require('express');
var router = express.Router();

var Listing = require('../models/listing.schema.js');

router.get('/', function(req, res) {
    // console.log('Get route GOT listing');
    Listing.find({}, function(err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            // console.log('found data: ', data);
            res.send(data);
        }
    });
});

router.post('/', function(req, res) {
    //console.log('new listing to store: ', req.body);

    var listingToAdd = new Listing(req.body);
    listingToAdd.save(function(err, data) {
        console.log('saved to the db: ', data);
        if (err) {
            console.log('save error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

router.delete('/:id', function(req, res) {
    Listing.findByIdAndRemove({ _id: req.params.id },
        function(err, data) {
            if (err) {
                console.log('delete error: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});

router.put('/:id', function(req, res) {
    var listingId = req.params.id;

    Listing.findByIdAndUpdate({ _id: listingId }, { $set: { cost: req.body.cost, sqft: req.body.sqft, city: req.body.city } },
        function(err, data) {
            if (err) {
                console.log('update error: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
// what does this do?  similar to seach public files???
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;