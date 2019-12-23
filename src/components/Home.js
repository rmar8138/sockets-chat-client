import React, { Component } from "react";
import UserForm from "./UserForm";

class Home extends Component {
  sendNameAndRoomData = (name, room) => {
    console.log(name, room);
  };

  render() {
    return (
      <div>
        <UserForm sendNameAndRoomData={this.sendNameAndRoomData} />
      </div>
    );
  }
}

export default Home;
