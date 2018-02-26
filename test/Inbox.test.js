const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const {
    interface,
    bytecode
} = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    // get accounts
    // web3.eth.getAccounts().then((fetch) => {
    //     console.log(fetch);
    // });
    // use async 
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ['Hello world!']
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        });
    // use one account to deploy the contract


    inbox.setProvider(provider);
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });
    it('has default initial message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hello world!');
    });
    it('can change the message', async () => {
        const transactionHash = await inbox.methods.setMessage('Mundo cruel :D').send({ from: accounts[0] });
        console.log('transactionHash', transactionHash);
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Mundo cruel :D');
        
    });
})