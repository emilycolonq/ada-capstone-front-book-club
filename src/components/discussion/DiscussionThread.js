import React from "react";
import Message from "./Message";

// This is the actual discussion thread. Every time a discussion title is submitted via NewDiscussionForm, this will be generated.

// This will also hold instances of Message. Every time a message is submitted via CreateMessage, an instance of Message populates Discussion Thread.

const DiscussionThread = (props) => {
  return (
    <div>
      <header>
        <h2 className="discussionTitle"> {props.subject}</h2>
      </header>
      <main className="discussionMain">
        {/* {props.messagesByDiscussionId[props.discussion?props.discussion_id]?.map((message)=>{ */}
        return(
        <div className="message">
          <Message />
        </div>
        ){/* })} */}
      </main>
    </div>
  );
};

export default DiscussionThread;
