import React from "react";
import { Link, Outlet } from "react-router-dom";
import FormModal from "../FormModal";
import NewDiscussionForm from "./NewDiscussionForm";

// This will have links to each DiscussionThread.

const Bulletin = (props) => {
  const bulletinLinksList = props.discussions.map((discussion) => {
    return (
      <li className="bulletinListItem">
        <Link to={`discussions/${discussion.id}`} activeStyle>
          {discussion.subject}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <header>
        <h2>{props.bulletinHeader}</h2>
      </header>
      <main>
        <FormModal
          header={props.startNewDiscussion}
          body={
            <NewDiscussionForm
              discussions={props.discussions}
              setDiscussions={props.setDiscussions}
            />
          }
        />
        <ul className="bulletinList">{bulletinLinksList}</ul>

        <Outlet />
      </main>
    </div>
  );
};

export default Bulletin;
