import Web3 from 'web3';

// use my package version web3 with injected provider from Metamask 
const web3 = new Web3(window.web3.currentProvider);

export default web3;
