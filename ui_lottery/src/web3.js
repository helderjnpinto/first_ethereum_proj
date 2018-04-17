import Web3 from 'web3';

// const localProvider = 'http://0.0.0.0:8545';
const infrink = 'https://rinkeby.infura.io/FdJHU8ZABTe7w1V3hFkb';

let web3;
// check if metamask are installed
if (window.web3 && window.web3.currentProvider.isMetaMask) {
    // use my package version web3 with injected provider from Metamask 
    web3 = new Web3(window.web3.currentProvider);
    console.log('​web3.currentProvider', web3);
    
} else {
    console.log('MetaMask account not detected :(');
    web3 = new Web3(infrink);
    console.log('​web3.currentProvider', web3);
    console.log(`Local provider for ${web3.currentProvider.host}, status: ${web3.currentProvider.connected}`);
}

console.log('​web3.currentProvider', web3);
// Check if Web3 has been injected by the browser (MetaMask).
// (since 'web3' is global, we need to use 'window')

console.log('Running Web3 version: ', web3.version);


export default web3;