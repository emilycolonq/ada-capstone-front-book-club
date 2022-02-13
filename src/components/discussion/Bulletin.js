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
        <h2>Discussions</h2>
      </header>
      <main>
        <FormModal
          header="Start A New Discussion"
          body={NewDiscussionForm}
          {...props}
        />
        <ul className="bulletinList">{bulletinLinksList}</ul>

        <Outlet />
      </main>
    </div>
  );
};

export default Bulletin;
