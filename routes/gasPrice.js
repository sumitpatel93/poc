var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/', (req, res, next) => {
		
if (typeof web3 !== undefined && typeof web3 !== 'undefined') { 
   // web3 = new Web3(web3.currentProvider);
   var gasPrice =  web3.eth.gasPrice
   res.send(gasPrice.toString(10));
}
else{
web3 =  new Web3(new Web3.providers.HttpProvider("http://35.190.169.173:8545"));
var gasPrice =  web3.eth.gasPrice;
res.send(gasPrice.toString(10));

}

	
});

module.exports = router;
