import React from "react";

const NewDiscussionForm = () => {
  return (
    <>
      <div>
        <h2>Start A Discussion</h2>
        <form onSubmit={props.handleSubmit}>
          <label>
            <p>Subject: </p>
            <input
              type="text"
              name="name"
              value={props.discussionThread.title}
              onChange={props.nameChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default NewDiscussionForm;
