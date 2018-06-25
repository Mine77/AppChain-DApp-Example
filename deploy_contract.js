 //your private key
 const privkey = '352416e1c910e413768c51390dfd791b414212b7b4fe6b1a18f58007fa894214';
 const quota = 999999; 
 //AppChain Testnet address 
 const chainAddress = "http://47.94.105.230:1337";

 // check first if the web3 is available 
 if (typeof web3 !== 'undefined') {
     web3 = new Web3(web3.currentProvider);
 } else { // set the provider you want from Web3.providers
     web3 = new Web3(new Web3.providers.HttpProvider(chainAddress));
 }

// check if web3 is instanced
 console.log(web3.version.api);

 //abi of the compiled contract
 var abi = [{
     "constant": false,
     "inputs": [],
     "name": "getValue",
     "outputs": [{
         "name": "",
         "type": "string"
     }],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }, {
     "constant": false,
     "inputs": [{
         "name": "str",
         "type": "string"
     }],
     "name": "setValue",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
 }];