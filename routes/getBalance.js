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
var bal = web3.eth.getBalance("0xc77004bB46AAB0Bb16ec7f54dE56bF20e6Ba1621")
res.send(bal)

}

	});	
});

module.exports = router;
