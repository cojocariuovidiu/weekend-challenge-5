//* ----- REQUIRES ------*//
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var port = 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('public'));
app.use(bodyParser.json());


/** ---------- START SERVER ---------- **/
app.listen(port, function(req, res) {
    console.log('Listening on port', port);
});