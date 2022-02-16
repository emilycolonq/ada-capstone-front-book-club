import React from "react";
// import Group from "./components/group";

const User = (props) => {
  console.log(props.username);
  const selectUser = () => {
    const newSelected = {
      username: props.username,
      user_id: props.id,
    };
    props.current(newSelected);
  };
  return (
    <div className="col-md-12">
      <h1>Welcome, {props.username}</h1>
    </div>
  );
};

export default User;
