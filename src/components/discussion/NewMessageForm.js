import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const NewMessageForm = (props) => {
  const [userInputMessage, setUserInputMessage] = useState("");
  const [userInputMessageIsValid, setUserInputMessageIsValid] = useState(true);

  const onSubmitMessageForm = (event) => {
    event.preventDefault();
    const axios = require("axios");

    axios
      .post(
        "https://ada-capstone-book-club.herokuapp.com/adabookclub/messages/",
        {
          message: userInputMessage,
          discussion_id: 1, //This is currently hard-coded. TODO: GET from NewDiscussionForm/DiscussionThread
          member_id: 1, // This is currently hard-coded. TODO: GET from Member
        }
      )
      .then((response) => {
        // console.log("response", response);
        // console.log("response data:", response.data);
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

    if (userInputMessage.trim().length === 0) {
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
