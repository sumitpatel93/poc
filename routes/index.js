var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/', (req, res, next) => {
	request('', function (error, response, body) {		
			if (typeof web3 !== 'undefined'){ 
    web3 = new Web3(web3.currentProvider);
}
else{
web3 =  new Web3(new Web3.providers.HttpProvider("http://104.196.220.141:8545"));
var bal = web3.eth.getBalance("0xa723b9a63ae67b78b94412cd574937210152ddef")
console.log(bal.toNumber());
}

	});	
});

module.exports = router;
