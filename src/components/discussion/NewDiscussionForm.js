import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const NewDiscussionForm = (props) => {
  const [userInputSubject, setUserInputSubject] = useState("");
  const [userInputSubjectIsValid, setUserInputSubjectIsValid] = useState(true);

  const onSubmitDiscussionForm = (event) => {
    event.preventDefault();
    const axios = require("axios");
    console.log("is this getting called?");

    axios
      .post(
        "https://ada-capstone-book-club.herokuapp.com/adabookclub/discussions/",
        {
          subject: userInputSubject,
          group_id: 1, // This is currently hard-coded. TODO: GET from Group
        }
      )
      .then((response) => {
        console.log("response:", response);
        console.log("response data:", response.data);
        props.setDiscussions([...props.discussions, response.data]);
        props.onSuccessfulSubmit();
      })
      .catch((error) => {
        console.log("error:", error);
        console.log("error response:", error.response);
      })
      // finally always runs
      .finally(() => {
        console.log("finally done!");
      });
  };

  const onChangeUserInputSubjectStateHandler = (event) => {
    event.preventDefault();
    const inputSubject = event.target.value;

    setUserInputSubject(inputSubject);

    if (inputSubject.trim().length > 0 && inputSubject.trim().length <= 100) {
      setUserInputSubjectIsValid(true);
    } else {
      setUserInputSubjectIsValid(false);
      return;
    }

    setUserInputSubjectIsValid(true);
  };

  return (
    <>
      <Form id="new-discussion-form" onSubmit={onSubmitDiscussionForm}>
        <Form.Group>
          <Form.Label>Subject: </Form.Label>
          <Form.Control
            type="text"
            onChange={onChangeUserInputSubjectStateHandler}
            value={userInputSubject}
            placeholder="Thoughts on Chapter 1"
          />
        </Form.Group>
        <input type="submit" value="Submit" form="new-discussion-form"></input>
      </Form>
    </>
  );
};

export default NewDiscussionForm;
