import React, { useState, useEffect } from "react";
import Message from "./Message";
import FormModal from "../FormModal";
import NewMessageForm from "./NewMessageForm";
import { Row, Col } from "react-bootstrap";

// This is the actual discussion thread. Every time a discussion title is submitted via NewDiscussionForm, this will be generated.

// This will also hold instances of Message. Every time a message is submitted via CreateMessage, an instance of Message populates Discussion Thread.

const DiscussionThread = (props) => {
  const [messages, setMessages] = useState([]);

  const deleteMessage = (message) => {
    const axios = require("axios");

    axios
      .delete(
        `https://ada-capstone-book-club.herokuapp.com/adabookclub/messages/${message.id}`
      )
      .then(() => {
        let filteredMessages = messages.filter((m) => {
          return m.id !== message.id;
        });
        setMessages(filteredMessages);
      });
  };
  const messagesList = messages.map((message) => {
    return (
      <li className="messageListItem">
        <Message
          messageContent={message.message}
          messages={messages}
          messageObject={message}
          deleteMessage={deleteMessage}
        />
      </li>
    );
  });

  useEffect(() => {
    const axios = require("axios");
    axios
      .get("https://ada-capstone-book-club.herokuapp.com/adabookclub/messages/")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
        console.log("error response:", error.response);
      });
  }, [setMessages]);
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col md={{ span: 6, offset: 0 }} sm={6} xs={6}>
          <header>
            <h2>Testing: I want this to be the discussion subject</h2>
          </header>
          <FormModal
            header="Start A New Message"
            body={NewMessageForm}
            {...props}
            messages={messages}
            setMessages={setMessages}
          />
          <ul>{messagesList}</ul>
        </Col>
      </Row>
    </div>
  );
};

export default DiscussionThread;
