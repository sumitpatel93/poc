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
var rcpt = web3.eth.getTransactionReceipt('0xb5539fa1a151aaefee8ce1f5561fd4d906ddf5795a8ccef94217c71d57dde14e');
console.log(rcpt);

}

	});	
});

module.exports = router;
