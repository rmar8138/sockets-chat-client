import React, { Component } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
import Form from "./Form";
import Messages from "./Messages";

let socket = null;

export class Room extends Component {
  state = {
    endpoint: "http://127.0.0.1:5000",
    messages: []
  };

  async componentDidMount() {
    const { name, room } = this.props.location.state;
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

export default Room;
