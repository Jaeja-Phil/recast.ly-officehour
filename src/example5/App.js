import React, { Component } from 'react';
import { YOUTUBE_API_KEY } from './yotube';

class App extends Component {
  searchHandler = () => {
    const query = 'dynamite';
    const max = 5;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${YOUTUBE_API_KEY}&q=${query}&maxResult=${max}&type=video&videoEmbeddable=true`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    return <button onClick={this.searchHandler}>Dynamite 검색해줘!</button>;
  }
}

export default App;
