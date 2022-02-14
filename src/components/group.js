import React from 'react';
import GroupPage from './grouppage';


const Group = (props) => {
    // const selectGroup = () => {
        const newSelected = {
            name: props.group.name,
            user: props.board.user,
            group_id: props.id,
            title: props.title, 
            author: props.author,
            page: props.page
        }
        props.current(newSelected);
    // } 
    return (
        <div>
            <li className="group-item" onClick={<GroupPage/>}> {props.group.name} </li>
        </div>
    )
}

export default Group;