import React, { Component } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
import Form from "./components/Form";
import Messages from "./components/Messages";
import NameForm from "./components/NameForm";

let socket = null;

export class App extends Component {
  state = {
    name: undefined,
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
      this.setState(prevState => ({
        messages: prevState.messages.concat(data)
      }));
    });
  }

  sendMessage = body => {
    const { name } = this.state;
    socket.emit("sendMessage", { body, name });
  };

  setName = name => {
    this.setState(() => ({ name }));
  };

  render() {
    return this.state.name ? (
      <div>
        <h1>Hello world!</h1>
        <Form sendMessage={this.sendMessage} />
        <Messages messages={this.state.messages} />
      </div>
    ) : (
      <NameForm setName={this.setName} />
    );
  }
}

export default App;
