var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/:blocknumber', (req, res, next) => {
			var blocknumber = req.params.blocknumber;
			if (typeof web3 !== 'undefined'){ 
    //web3 = new Web3(web3.currentProvider);
    var info = web3.eth.getBlock(blocknumber);
    res.send(info);
}
else{
    web3 =  new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/tPNyqnWI32IepQh2lrMf"));
    var info = web3.eth.getBlock(blocknumber);
    res.send(info);
}

	
});

module.exports = router;
