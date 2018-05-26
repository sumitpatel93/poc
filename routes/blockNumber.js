var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/', (req, res, next) => {
		
if (typeof web3 !== undefined && typeof web3 !== 'undefined' ) { 
   // web3 = new Web3(web3.currentProvider);
   var number =  web3.eth.blockNumber;
   res.send(number);
   console.log('if');
}
   else{
   web3 =  new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/tPNyqnWI32IepQh2lrMf"));
   var number =  web3.eth.blockNumber;
   res.send(number);
   console.log('else');
}

	
});

module.exports = router;
