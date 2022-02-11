import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
import PagesProgressBar from "./pagesprogress";
import { Row, Col } from "react-bootstrap";
import Bulletin from "./discussion/Bulletin";
import axios from "axios";
import NewDiscussionForm from "./discussion/NewDiscussionForm";

const Group = (props) => {
  // const selectGroup = () => {
  //     const newSelected = {
  //         name: props.group.name,
  //         group_id: props.id
  //     }
  //     props.current(newSelected);
  // }

  // Bulletin State and Event Handlers

  // a single discussion is an entire object. discussions is an array of discussion objects.
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://ada-capstone-book-club.herokuapp.com/adabookclub/discussions/"
      )
      .then((response) => {
        setDiscussions(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
        console.log("error response:", error.response);
      });
  }, [setDiscussions]);

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col md={{ span: 6, offset: 0 }} sm={6} xs={6}>
          <h3 className="page-progress">Progress Bar</h3>
          <PagesProgressBar bgcolor="yellow" progress="30" height={30} />
          <PagesProgressBar bgcolor="orange" progress="60" height={30} />
          <div>
            <Bulletin
              bulletinHeader="Discussions"
              bulletinTitle="Need to update every time a new discussion is created"
              startNewDiscussion="Start A New Discussion"
              discussions={discussions}
              setDiscussions={setDiscussions}
              newDiscussionForm={
                <NewDiscussionForm
                  discussions={discussions}
                  setDiscussions={setDiscussions}
                />
              }
            />
          </div>
        </Col>
      </Row>
    </div>
    // <h1 className="group-item" onClick={selectGroup}> {props.group.name} </h1>
  );
};

export default Group;
