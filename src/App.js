import React, { Component } from "react";
import socketIOClient from "socket.io-client";

export class App extends Component {
  state = {
    endpoint: "http://127.0.0.1:5000"
  };

  componentDidMount() {
    // start socket connection
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.emit("message", "hello from the client side!");
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
      </div>
    );
  }
}

export default App;
