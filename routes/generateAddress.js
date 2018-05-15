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
web3 =  new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/tPNyqnWI32IepQh2lrMf"));
var bal = web3.eth.getTransactionCount("0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe")
console.log(bal);
}

	});	
});

module.exports = router;
