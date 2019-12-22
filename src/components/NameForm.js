import React, { Component } from "react";

class NameForm extends Component {
  state = {
    name: ""
  };

  handleFormSubmit = () => {
    this.props.setName(this.state.name);
  };

  handleInputChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  render() {
    return (
      <div>
        <h1>Please enter your name:</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleInputChange} />
          <input type="submit" value="Enter" />
        </form>
      </div>
    );
  }
}

export default NameForm;
