import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor!');
  }

  componentDidMount() {
    console.log('component did mount!');
  }

  componentDidUpdate() {
    console.log('component did update!');
  }

  componentWillUnmount() {
    console.log('component will unmount!');
  }

  handleCountSetState() {
    this.setState({ count: this.state.count + 1 });
  }

  handleCountDirectly() {
    this.state.count += 1;
  }

  render() {
    console.log('rendering!');
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
        <span>현재 카운터 값: {this.state.count}</span>
        <button onClick={this.handleCountSetState.bind(this)}>setState로 증가</button>
        <button onClick={this.handleCountDirectly.bind(this)}>직접 증가</button>
      </div>
    );
  }
}

export default App;
