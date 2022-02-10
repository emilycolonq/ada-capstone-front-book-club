import React from "react";
import { Link } from "react-router-dom";

// This will have links to each DiscussionThread.

const Bulletin = (props) => {
  return (
    <div>
      <header>
        <h2>{props.bulletinHeader}</h2>
      </header>
      <ul className="bulletinList">
        <li className="bulletinListItem">
          <Link to="discussion" activeStyle>
            {props.bulletinTitle}
          </Link>
          {/* NOTE: to="discussion" needs to be changed to discussion/:id to link to discussion by discussion_id */}
        </li>
      </ul>
    </div>
  );
};

export default Bulletin;
