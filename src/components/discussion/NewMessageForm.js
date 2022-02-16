import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const NewMessageForm = (props) => {
  const [userInputMessage, setUserInputMessage] = useState("");
  const [userInputMessageIsValid, setUserInputMessageIsValid] = useState(true);

  const onSubmitMessageForm = (event) => {
    event.preventDefault();
    const axios = require("axios");

    if (!props.member) {
      return;
    }
    axios
      .post(
        "https://ada-capstone-book-club.herokuapp.com/adabookclub/messages/",
        {
          message: userInputMessage,
          discussion_id: props.discussionId,
          member_id: props.member.id,
        }
      )
      .then((response) => {
        props.setMessages([...props.messages, response.data]);
        props.onSuccessfulSubmit();
      })
      .catch((error) => {
        console.log("error:", error);
        console.log("error response:", error.response);
      })
      .finally(() => {
        console.log("all done!");
      });
  };

  const onChangeUserInputMessageStateHandler = (event) => {
    event.preventDefault();
    const inputMessage = event.target.value;

    setUserInputMessage(inputMessage);

    if (inputMessage.trim().length === 0) {
      setUserInputMessageIsValid(false);
      return;
    }

    setUserInputMessageIsValid(true);
  };
  return (
    <>
      <Form id="new-message-form" onSubmit={onSubmitMessageForm}>
        <Form.Group>
          <Form.Label>Message </Form.Label>
          <Form.Control
            type="text"
            onChange={onChangeUserInputMessageStateHandler}
            value={userInputMessage}
            placeholder="Chapter 1 was so interesting!"
          />
        </Form.Group>
        <input type="submit" value="Submit" form="new-message-form"></input>
      </Form>
    </>
  );
};

export default NewMessageForm;
