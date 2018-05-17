var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/', (req, res, next) => {
	
    if (typeof web3 !== undefined && typeof web3 !== 'undefined' ) {
        //web3 = new Web3(web3.currentProvider);
        var bal = web3.eth.getBalance("0x5E906d42dFDE5f26422BdaBA138433dB9c783dB8")
        res.send(bal);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://35.190.169.173:8545"));
        var bal = web3.eth.getBalance("0x6B2886a85B1e90140ca670cad18bAD4CF05D551F")
        res.send(bal);

    }

});

module.exports = router;
