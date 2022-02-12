import React from 'react';


const Group = (props) => {
    const selectGroup = () => {
        const newGroup = {
            name: props.group.name,
            user: props.board.user,
            group_id: props.id
        }
        props.current(newSelected);
    } 
    return (
        <li className="group-item" onClick={selectGroup}> {props.group.name} </li>
    )
}

export default Group;