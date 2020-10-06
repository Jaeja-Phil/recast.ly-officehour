import React, { Component } from 'react';

import Children from './Children';
import { fakeData } from './fakeData';

class App extends Component {
  render() {
    // console.log(fakeData);
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
        props가 뭔지 살펴봅시다
        <Children /> {/* 이곳에 props 줘보기! */}
      </div>
    );
  }
}

export default App;
