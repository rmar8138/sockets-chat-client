import React, { Component } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
import Form from "./components/Form";
import Messages from "./components/Messages";

let socket = null;

export class App extends Component {
  state = {
    endpoint: "http://127.0.0.1:5000",
    messages: []
  };

  async componentDidMount() {
    // get messages from db and set to state
    const response = await axios.get(`${this.state.endpoint}`);
    const { data: messages } = response;
    this.setState(() => ({ messages }));

    // start socket connection
    const { endpoint } = this.state;
    socket = socketIOClient(endpoint);
    socket.emit("message", "hello from the client side!");
    socket.on("renderMessage", data => {
      console.log(data);
    });
  }

  sendMessage = body => {
    socket.emit("sendMessage", { body });
  };

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <Form sendMessage={this.sendMessage} />
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
