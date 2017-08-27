var express = require('express');
var router = express.Router();

var Rent = require('../models/rental.schema.js');

router.get('/', function(req, res) {
    console.log('Get route GOT');
    //res.send([{ city: 'test', sqft: 'also test' }]);
    Rent.find({}, function(err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            // console.log('found data: ', data);
            res.send(data);
        }
    });
});

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;