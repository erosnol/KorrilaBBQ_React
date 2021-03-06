import './App.css';
import { receipt1, receipt2, receipt3 } from "./data/ReceiptData";

import { Component } from 'react';
import Receipt from './components/Receipt'

class App extends Component {

  state = {
   receipt1: receipt1,
   receipt2: receipt2,
   receipt3: receipt3
  }


  

    render(){
      console.log(receipt1);
      return (
        <div>
        <h1>Korilla BBQ</h1>

        <div className='container'>
          { this.state.receipt1.paid ? null : <Receipt receipt={this.state.receipt1} />}
          { this.state.receipt2.paid ? null : <Receipt receipt={this.state.receipt2} />}
          { this.state.receipt3.paid ? null : <Receipt receipt={this.state.receipt3} />}
        </div>
        </div>
      );
    }
}

export default App;
