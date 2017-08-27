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

router.post('/', function(req, res) {
    console.log('new listing to store: ', req.body);

    var rentalToAdd = new Rent(req.body);
    rentalToAdd.save(function(err, data) {
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
    Rent.findByIdAndRemove({ _id: req.params.id },
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

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});


module.exports = router;