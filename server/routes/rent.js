var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log('Get route GOT');
});


module.exports = router;