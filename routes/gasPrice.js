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
web3 =  new Web3(new Web3.providers.HttpProvider("http://35.190.169.173:8545"));
var gasPrice =  web3.eth.gasPrice;
console.log(gasPrice.toString(10));

}

	});	
});

module.exports = router;