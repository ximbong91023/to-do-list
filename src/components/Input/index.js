import React, { Component } from "react";

import "./index.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const name = this.state.value;
    const data = {
      name: name,
      isDone: false
    };

    this.props.addData(data);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          type="text"
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}

export default Input;
