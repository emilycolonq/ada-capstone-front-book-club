import React, { useState } from "react";

// This is the actual message. Every time a message is submitted via CreateMessage, this will be generated.
const Message = (props) => {
  return (
    <div className="message">
      <section className="message-text">{props.messageContent}</section>
      <section id="options">
        <button
          className="message-button"
          id="edit"
          // onClick={() => props.editMessage(props.messageContent)}
        >
          Edit
        </button>
        <button
          className="message-button"
          id="delete"
          onClick={() => props.deleteMessage(props.messageObject)}
        >
          Delete
        </button>
      </section>
    </div>
  );
};

export default Message;
