import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Form from "./components/Form";

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

  sendMessage = body => {
    console.log(body);
  };

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <Form sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
