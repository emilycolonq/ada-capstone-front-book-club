import React, { useState, useEffect } from "react";
// import PagesProgressBar from "./pagesprogress";
// import { Row, Col } from "react-bootstrap";
import Bulletin from "./discussion/Bulletin";
import axios from "axios";
// import { useParams } from "react-router-dom";
import GroupPage from "./grouppage";

const Group = (props) => {
  // A single discussion is an entire object. discussions is an array of discussion objects.

  // const selectGroup = () => {
  const newSelected = {
    name: props.group.name,
    user: props.board.user,
    group_id: props.id,
    title: props.title,
    author: props.author,
    page: props.page,
  };
  props.current(newSelected);
  // }
  return (
    <div>
      <li
        className="group-item"
        onClick={
          <GroupPage
          // discussions={discussions}
          // setDiscussions={setDiscussions}
          />
        }
      >
        {" "}
        {props.group.name}{" "}
      </li>
    </div>
  );
};

export default Group;
