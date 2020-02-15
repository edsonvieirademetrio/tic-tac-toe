import React, { Component } from "react";

class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      indentify: null,
    };
  }

  render() {

    return ( 
          <button className="square" onClick={() => this.setState({indentify: 'X'})}>
              {this.state.indentify} 
          </button>
    );
  }
}

  export default Square;