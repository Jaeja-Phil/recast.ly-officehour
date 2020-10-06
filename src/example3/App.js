import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.bindExampleOne = this.bindExampleOne.bind(this);
  }

  bindExampleOne() {
    console.log(this);
  }

  bindExampleTwo = () => {
    console.log(this);
  };

  bindExampleThree() {
    console.log(this);
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <button onClick={this.bindExampleOne}>bind example one</button>
        <button onClick={this.bindExampleTwo}>bind example two</button>
        <button onClick={this.bindExampleThree.bind(this)}>bind example three</button>
      </div>
    );
  }
}

export default App;
