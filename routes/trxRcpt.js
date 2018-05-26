var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/:trxhash', (req, res, next) => {
	var trxhash = req.params.trxhash;
	if (typeof web3 !== undefined && typeof web3 !== 'undefined' ) {	    
		//web3 = new Web3(web3.currentProvider);
		var rcpt = web3.eth.getTransactionReceipt(trxhash);
		res.send(rcpt);
	}
	else 
	{
    	web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/tPNyqnWI32IepQh2lrMf"));
		//That the receipt is not available for pending transactions.
		var rcpt = web3.eth.getTransactionReceipt(trxhash);
		res.send(rcpt);

	}

	
});

module.exports = router;
