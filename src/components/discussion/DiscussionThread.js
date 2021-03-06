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
  const [discussionSubject, setDiscussionSubject] = useState("Discussions");

  const { discussionId } = useParams();

  // Messages State and Event Handlers

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
        setDiscussionSubject(response.data.subject);
      })
      .catch((error) => {
        console.log("error:", error);
        console.log("error response:", error.response);
      });
  }, [setMessages, setDiscussionSubject]);

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col md={{ span: 6, offset: 0 }} sm={6} xs={6}>
          <header>
            <h2>{discussionSubject}</h2>
          </header>
          <FormModal
            header="Start A New Message"
            body={NewMessageForm}
            messages={messages}
            setMessages={setMessages}
            discussionId={discussionId}
            member={props.member}
          />
          <ul>{messagesList}</ul>
        </Col>
      </Row>
    </div>
  );
};

export default DiscussionThread;
