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

// what does this do?  similar to seach public files???
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;