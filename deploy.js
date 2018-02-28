const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');


// WARNING -> Do not steal my test ethers :D!
// grab some in this place https://faucet.rinkeby.io/
const metamaskTest = "about hair goose output senior short stone decade lock loop kidney beach";
const linkFromInfuraProvider = 'https://rinkeby.infura.io/t382LA53w0qwf9TYabQ7';

const provider = new HDWalletProvider(
    metamaskTest,
    linkFromInfuraProvider
);

// use web3 to deploy make transactions etc... 
const web3 = new Web3(provider);