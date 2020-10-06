import React, { Component } from 'react';
import InputField from './InputField';
import VideoList from './VideoList';

class App extends Component {
  state = {
    videos: ['강아지 비디오'],
  };

  onClickHandler = (text) => {
    this.setState({ videos: [...this.state.videos, text] });
  };

  render() {
    return (
      <div>
        <InputField onClickHandler={this.onClickHandler} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
