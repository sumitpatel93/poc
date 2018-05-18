var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/:address', (req, res, next) => {
	var address = req.params.address;
    if (typeof web3 !== undefined && typeof web3 !== 'undefined' ) {
        //web3 = new Web3(web3.currentProvider);
        var bal = web3.eth.getBalance(address);
        res.send(bal);
      
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://35.190.169.173:8545"));
        var bal = web3.eth.getBalance(address)
        res.send(bal);
         
    }

});

module.exports = router;
