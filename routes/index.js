var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/', (req, res, next) => {
res.send("hi this is index page for api testing of wallet")	
});

module.exports = router;
