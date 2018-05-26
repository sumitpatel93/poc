var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/:address', (req, res, next) => {
	var address = req.params.address;
    if (typeof web3 !== undefined && typeof web3 !== 'undefined' ) {
    
        //web3 = new Web3(web3.currentProvider);
        var count = web3.eth.getTransactionCount(address);
        res.send(count);
       
           

    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/tPNyqnWI32IepQh2lrMf"));
        var count = web3.eth.getTransactionCount(address);
        res.send(count);
       

    }

});

module.exports = router;
