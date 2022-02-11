import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormModal from "../FormModal";

// This will have links to each DiscussionThread.

const Bulletin = (props) => {
  const bulletinLinksList = props.discussions.map((discussion) => {
    return (
      <li className="bulletinListItem">
        <Link to={`discussion/${discussion.id}`} activeStyle>
          {discussion.subject}
        </Link>
      </li>
    );
  });
  console.log(bulletinLinksList);
  return (
    <div>
      <header>
        <h2>{props.bulletinHeader}</h2>
      </header>
      <main>
        <FormModal
          header={props.startNewDiscussion}
          body={props.newDiscussionForm}
          submitHandler={props.newSubjectHandler}
        />
        <ul className="bulletinList">{bulletinLinksList}</ul>
      </main>
    </div>
  );
};

export default Bulletin;
