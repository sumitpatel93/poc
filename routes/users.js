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
var contractAddress = "0x318a624cD1cc9B9830fE2B353816Fa2014f3D72d";
var contract = web3.eth.contract(abiArray).at(contractAddress);
   var number =  web3.eth.blockNumber;
   var rawTransaction = {
    "from": "0xbb7f52b085a2b4e567c0e12cc37d01572c5ff764",
    "nonce":"0x002"  ,
    "gasPrice": "0x9184e72a0",
    "gasLimit": "0x7459",
    "to": "0xd98077dAe57Fb61902AbA993ac32Cfb1213639B3",
    "value": "0x012",
    "data": contract.transfer.getData("0xd98077dAe57Fb61902AbA993ac32Cfb1213639B3", 100, {from: "0xbb7f52b085a2b4e567c0e12cc37d01572c5ff764"}),
    "chainId": "0x04"
};

var privKey = new Buffer('ea54c4ee7d53f48d6e7120e07eb21d77d11383e2be4634b164537e9227ed71f1', 'hex');
console.log('else');
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
