import React, { useState, useEffect } from "react";
import Message from "./Message";
import FormModal from "../FormModal";
import NewMessageForm from "./NewMessageForm";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

// This is the actual discussion thread. Every time a discussion title is submitted via NewDiscussionForm, this will be generated.

// This will also hold instances of Message. Every time a message is submitted via NewMessageForm, an instance of Message populates DiscussionThread.

const DiscussionThread = (props) => {
  const [messages, setMessages] = useState([]);

  const { discussionId } = useParams();

  const deleteMessage = (message) => {
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
          messageDate={message.date_posted}
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
      .get(
        `https://ada-capstone-book-club.herokuapp.com/adabookclub/discussions/${discussionId}`
      )
      .then((response) => {
        setMessages(response.data.messages);
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
            <h2>{}</h2>
          </header>
          <FormModal
            header="Start A New Message"
            body={NewMessageForm}
            {...props}
            messages={messages}
            setMessages={setMessages}
            discussionId={discussionId}
          />
          <ul>{messagesList}</ul>
        </Col>
      </Row>
    </div>
  );
};

export default DiscussionThread;
