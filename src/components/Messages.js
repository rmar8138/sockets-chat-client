import React from "react";
import Message from "./Message";

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map(message => (
        <Message message={message} key={message._id} />
      ))}
    </div>
  );
};

export default Messages;
