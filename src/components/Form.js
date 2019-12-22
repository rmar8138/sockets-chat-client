import React, { Component } from "react";

class Form extends Component {
  state = {
    body: ""
  };

  handleInputChange = e => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.sendMessage(this.state.body);
    e.target.elements.body.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Enter message</label>
        <input type="text" name="body" onChange={this.handleInputChange} />
        <input type="submit" value="Send Message" />
      </form>
    );
  }
}

export default Form;
