import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChangeHandler = (e) => {
    console.log(e.target, 'event target');
    console.log(e.target.value, 'event target value');
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <textarea value={this.state.text} onChange={this.onChangeHandler}></textarea>
        <button onClick={this.props.onClickHandler.bind(this, this.state.text)}>Search</button>
      </div>
    );
  }
}

export default InputField;
