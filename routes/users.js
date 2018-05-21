var Web3 = require('web3');
var express = require('express');
var router = express.Router();
var fs    = require("fs");
var EthereumTx = require('ethereumjs-tx');
var crypto = require('crypto');
var secp256k1 = require('secp256k1');
var keccak =  require("keccak");


router.get('/', (req, res, next) => {
    
if ( typeof web3 !== 'undefined' && typeof web3 !== undefined) { 
    web3 = new Web3(web3.currentProvider);

   console.log('if');
}
   else{

   web3 =  new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/tPNyqnWI32IepQh2lrMf"));
 
   var count = web3.eth.getTransactionCount("0xBed8b4981f2432498e501dea46a767025E7fAE9a");
   var abiArray = JSON.parse(fs.readFileSync('./public/mycoin.json', 'utf-8'));
   var contractAddress = "0x53576813682009a4D35495e18f039067618B3e27";
   var contract = web3.eth.contract(abiArray).at(contractAddress);
   var number =  web3.eth.blockNumber;
   var rawTransaction = {
    "from": "0xBed8b4981f2432498e501dea46a767025E7fAE9a",
    "nonce":web3.toHex(count)  ,  //keep track of trx happening in the _from block.
    "gasPrice": web3.toHex(10000000000),
    "gasLimit": web3.toHex(500000),
    "to": "0x53576813682009a4D35495e18f039067618B3e27",
    "value": web3.toHex(0), //sends the amount of ether _to address
    "data": contract.transfer.getData("0xDED54CC5f578Aa39c1083dbe16D68a28C776cA02", 100, {from: "0xBed8b4981f2432498e501dea46a767025E7fAE9a"}),
    "chainId": "0x04" //rinkeby id 
};

var privKey = new Buffer('a8b5b0c767d2914b18bf3a7dff89e95ad856e80153b247c385e8ba97ce037081', 'hex');
console.log('else');
console.log("transaction count is" , count);
var tx = new EthereumTx(rawTransaction);

tx.sign(privKey);
var serializedTx = tx.serialize();

web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
     if (!err) { 
        console.log("Your raw transaction hsh is:" ,hash);
     }
     else{
        console.log(err);
     }
});
  
}

  
});

module.exports = router;
