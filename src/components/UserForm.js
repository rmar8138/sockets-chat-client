import React, { Component } from "react";

class UserForm extends Component {
  state = {
    name: "",
    room: ""
  };

  handleFormSubmit = e => {
    const { name, room } = this.state;
    e.preventDefault();
    this.props.sendNameAndRoomData(name, room);
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(() => ({
      [name]: value
    }));
  };

  render() {
    return (
      <div>
        <h2>Please enter your user name and room name:</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Room</label>
            <input type="text" name="room" onChange={this.handleInputChange} />
          </div>
          <div>
            <input type="submit" value="Enter" />
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
