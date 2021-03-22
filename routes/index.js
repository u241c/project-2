const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');
const nootropics = require('../controllers/nootropics');


router.get('/', function(req, res){
    res.redirect('/nootropics');

});

module.exports = router;