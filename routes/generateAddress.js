var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();
var keythereum = require("keythereum");
var dk = keythereum.create();
var readableAddress = keythereum.privateKeyToAddress(dk.privateKey);


router.get('/', (req, res, next) => {
	res.json({public_address:readableAddress, private_key:dk.privateKey.toString('hex')});
	
});
module.exports = router;
