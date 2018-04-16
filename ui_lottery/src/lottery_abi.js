import web3 from './web3';
// https://rinkeby.etherscan.io/tx/0x0d2a07ce58514adce1a7e4bd4fbb2d0e1405a2580599d1f955ef0d70b4c11a20
// https://rinkeby.etherscan.io/visualizer?tx=0x0d2a07ce58514adce1a7e4bd4fbb2d0e1405a2580599d1f955ef0d70b4c11a20&type=txn
const address = '0x876638c87A0ca31305a2c3c962018CD61Da5Ad04';

const abi = [{
    "constant": true,
    "inputs": [],
    "name": "manager",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "pickWinner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "random",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getPlayers",
    "outputs": [{
        "name": "",
        "type": "address[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "enter",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "uint256"
    }],
    "name": "players",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}];
const lottery = new web3.eth.Contract(abi, address);
export default lottery;