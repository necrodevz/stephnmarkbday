import React, { Component } from 'react';
//import logo from './logo.svg';
import img from './58597bdf4f6ae202fedf2896.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={img} className="App-logo" alt="hbd" />
                <p>
                    <span style={{ fontFamily: 'Pacifico'}}>Stephanie</span> and <span style={{ fontFamily: 'Pacifico'}}>Mark</span>
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
