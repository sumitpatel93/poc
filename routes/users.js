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
   var count = web3.eth.getTransactionCount("0xD8d9e3fE93315b8ce838E39c4696438A8d8E66F3");
var abiArray = JSON.parse(fs.readFileSync('./public/mycoin.json', 'utf-8'));
var contractAddress = "0xc4DF656aE645dBa57d5B6E63164026c2379A07Be";
var contract = web3.eth.contract(abiArray).at(contractAddress);
   var number =  web3.eth.blockNumber;
   var rawTransaction = {
    "from": "0x95297713bdb43515420d9662a88516219085bb8a",
    "nonce": "0x001",
    "gasPrice": "0x9184e72a000",
    "gasLimit": "0x7458",
    "to": "0xDED54CC5f578Aa39c1083dbe16D68a28C776cA02",
    "value": "0x012",
    "data": contract.transfer.getData("0xDED54CC5f578Aa39c1083dbe16D68a28C776cA02", 100, {from: "0x95297713bdb43515420d9662a88516219085bb8a"}),
    "chainId": "0x04"
};

var privKey = new Buffer('9e37167fd8b807a3805e41e34e07dd5472512ec568878c0a08c49cec0c5f9a4b', 'hex');
console.log('else');
var tx = new EthereumTx(rawTransaction);

tx.sign(privKey);
var serializedTx = tx.serialize();
;
web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
     if (!err) { 
        console.log(hash);
     }
     else{
        console.log(err);
     }
});
  
}

  
});

module.exports = router;
