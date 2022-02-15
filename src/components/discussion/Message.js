import React from "react";

// This is the actual message. Every time a message is submitted via NewMessageForm, this will be generated.

const Message = (props) => {
  let timestamp = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(props.messageDate);

  return (
    <div className="message">
      <section className="message-text">
        {props.messageContent}
        <br />
        Posted on {timestamp}
      </section>
      <section id="options">
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
