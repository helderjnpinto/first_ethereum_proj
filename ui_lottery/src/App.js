import React, { Component } from 'react';
import './App.css';
import web3 from 'web3';

import lottery from './lottery_abi';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { manager: ''};
  }


  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    this.setState({ manager });
  }

  render() {
    console.log(web3.version);
    

    // const accounts = web3.eth.getAccounts().then(console.log);
    
    return (
      <div className="App">
         <h2> Lottery </h2>

      </div>
    );
  }
}

export default App;
