var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/', (req, res, next) => {
	
	if (typeof web3 !== undefined && typeof web3 !== 'undefined' ) {	    
		//web3 = new Web3(web3.currentProvider);
		var rcpt = web3.eth.getTransactionReceipt('0x42d45663cd3884580de0b80469dff8ca263ec15495e96b498f379f411acbb9ed');
		res.send(rcpt);
	}
	else 
	{
    	web3 = new Web3(new Web3.providers.HttpProvider("http://35.190.169.173:8545"));
		//That the receipt is not available for pending transactions.
		var rcpt = web3.eth.getTransactionReceipt('0x42d45663cd3884580de0b80469dff8ca263ec15495e96b498f379f411acbb9ed');
		res.send(rcpt);

	}

	
});

module.exports = router;
