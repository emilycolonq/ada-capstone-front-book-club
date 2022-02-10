import React from "react";
import { Link } from "react-router-dom";

// This will have links to each DiscussionThread.

const Bulletin = () => {
  return (
    <div>
      <ul className="bulletinList">
        <li className="bulletinListItem">
          <Link to="discussion" activeStyle>
            Test
          </Link>
          {/* NOTE: to="discussion" needs to be changed to discussion/:id to link to discussion by discussion_id */}
        </li>
      </ul>
    </div>
  );
};

export default Bulletin;
