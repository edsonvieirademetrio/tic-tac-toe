import React, { Component } from "react";
import './App.scss';
import TicTacToe from './Components/TicTacToe';

class App extends Component {

  render() {

    return ( 
        <div className="App">
          <TicTacToe />
        </div> 
    );
  }
}

export default App;
