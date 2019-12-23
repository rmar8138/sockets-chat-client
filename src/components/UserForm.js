import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserForm extends Component {
  state = {
    name: "",
    room: ""
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
          <Link
            to={{
              pathname: `/room/${this.state.room}`,
              state: {
                name: this.state.name,
                room: this.state.room
              }
            }}
          >
            Enter
          </Link>
        </form>
      </div>
    );
  }
}

export default UserForm;
