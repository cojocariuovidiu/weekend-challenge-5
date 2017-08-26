//* ----- REQUIRES ------*//
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var rent = require('./routes/rent.js');

var port = 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('public'));
app.use(bodyParser.json());


/** ---------- EXPRESS ROUTES ---------- **/
app.use('/rent', rent);

/** MONGOOSE CONNECTION **/
var databaseUrl = 'mongodb://localhost:27017/realestate';
mongoose.connect(databaseUrl, {
    useMongoClient: true
});

mongoose.connection.on('connected', function() {
    console.log('mongoose connected to : ', databaseUrl);
});

mongoose.connection.on('error', function(err) {
    console.log('mongoose connection error to : ', err);
});
/** ---------- START SERVER ---------- **/
app.listen(port, function(req, res) {
    console.log('Listening on port', port);
});