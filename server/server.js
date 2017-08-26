//* ----- REQUIRES ------*//
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
var port = 5000;
var rent = require('./routes/rent.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('public'));
app.use(bodyParser.json());


/** ---------- EXPRESS ROUTES ---------- **/
app.use('/rent', rent);

/** ---------- START SERVER ---------- **/
app.listen(port, function(req, res) {
    console.log('Listening on port', port);
});