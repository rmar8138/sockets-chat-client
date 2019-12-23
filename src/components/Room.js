import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
    // if (!name || !room) {
    //   this.props.history.push("/");
    // }
    // get messages from db and set to state
    const response = await axios.get(`${this.state.endpoint}/room/${room}`);
    const { data: messages } = response;
    this.setState(() => ({ messages }));

    // start socket connection
    const { endpoint } = this.state;
    socket = socketIOClient(endpoint);
    socket.emit("joinRoom", room);
    socket.on("renderMessage", data => {
      this.setState(prevState => ({
        messages: prevState.messages.concat(data)
      }));
    });
  }

  sendMessage = body => {
    const { name, room } = this.props.location.state;
    socket.emit("sendMessage", { body, name, room });
  };

  render() {
    const { name, room } = this.props.location.state;
    return name && room ? (
      <div>
        <h1>{room}</h1>
        <h2>Welcome, {name}</h2>
        <Form sendMessage={this.sendMessage} />
        <Messages messages={this.state.messages} />
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default Room;
