import React from "react";
// import Group from "./components/group";

const User = (props) => {
    const selectUser = () => {
        const newSelected = {
            username: props.group.username,
            user_id: props.id,
        }
        props.current(newSelected);
    } 
    return (
        <div>
            <li className="group-item" onClick={selectUser}> {props.group.username} </li>
        </div>
    )
}

export default User;