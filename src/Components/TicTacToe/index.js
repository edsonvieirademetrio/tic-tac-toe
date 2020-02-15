import React, { Component } from "react";
import "./style.scss";

import Game from "./Game";

class TicTacToe extends Component {
  render() {
    return (
      <div className="TicTacToe">
        <Game />
      </div>
    );
  }
}
  

export default TicTacToe
