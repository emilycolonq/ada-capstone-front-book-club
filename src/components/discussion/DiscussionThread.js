import React, { useState } from "react";
import Message from "./Message";
import FormModal from "../FormModal";
import { Outlet } from "react-router-dom";
import NewMessageForm from "./NewMessageForm";
import { Row, Col } from "react-bootstrap";

// This is the actual discussion thread. Every time a discussion title is submitted via NewDiscussionForm, this will be generated.

// This will also hold instances of Message. Every time a message is submitted via CreateMessage, an instance of Message populates Discussion Thread.

const DiscussionThread = (props) => {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col md={{ span: 6, offset: 0 }} sm={6} xs={6}>
          <header>
            <h2>Testing: I want this to be the discussion subject</h2>
          </header>
          <FormModal header="Start A New Message" body={NewMessageForm} />
          <h4>I want this to populate all message instances</h4>
          {/* <Message /> */}
        </Col>
      </Row>
    </div>
  );
};

export default DiscussionThread;
