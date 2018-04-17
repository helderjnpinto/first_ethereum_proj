import React, { Component } from 'react';
import './App.css';
import web3 from './web3';

import lottery from './lottery_abi';
class App extends Component {
  state = { 
      manager: '',
      players: [],
      balance: '',
      value: '',
      message: '',
      accounts: [],
      selectedAccount: ''
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address); // address of contract and return an big number
    const accounts = await web3.eth.getAccounts();
    console.log('​App -> asynccomponentDidMount -> accounts', await web3.eth);
  
    this.setState({ manager, players, balance, accounts });
  }

  render() {
   
    return (
      <div className="App">
         <h2> Lottery </h2>
         <div> 
          <h6>Manager:</h6> { this.state.manager }
         </div>
         
         This lottery has { this.state.players.length } players.
         Total of lottery { web3.utils.fromWei(this.state.balance, 'ether') } ether.
         <hr /> 
          <form onSubmit={this.onSubmit}>
            <h4>Try the lottery</h4>
            <div>
            <label> Amount of ether > 0.02 ether</label>
            <br />
            Used account: { this.state.accounts }
           Total : { this.state.accounts }
            <br />
            <input
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })} />
            </div>
            <button >Enter</button>
          </form>

          <hr />
          <h1> { this.state.message } </h1>

          <hr />
            <h4> PickWinner </h4>
            <button onClick={this.pickWinner}>Pick the random winner!</button>
          <hr />
      </div>
    );
  }

  pickWinner = async (e) => {
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: 'Waiting on transaction success ... '});

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({ message: 'A winner has been picked! ... '});
    
  }


  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    
    this.setState({ message: 'Wait on transaction ... ' });

    console.log('​App -> onSubmit -> accounts', accounts);
    
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({ message: 'You have been enter on this lottery!'});

    console.log('https://rinkeby.etherscan.io/tx/0x0d2a07ce58514adce1a7e4bd4fbb2d0e1405a2580599d1f955ef0d70b4c11a20',
                'https://rinkeby.etherscan.io/visualizer?tx=0x0d2a07ce58514adce1a7e4bd4fbb2d0e1405a2580599d1f955ef0d70b4c11a20&type=txn');
 
  };

}

export default App;
