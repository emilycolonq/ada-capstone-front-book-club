import React from 'react';
// import PropTypes from 'prop-types';
// import Card from './Card';

const Group = (props) => {
    const selectGroup = () => {
        const newSelected = {
            title: props.board.title,
            // owner: props.board.owner,
            group_id: props.id
        }
        props.current(newSelected);
    } 
    // console.log(getBoard)
    return (
        <li className="group-item" onClick={selectGroup}> {props.group.title} </li>
    )

}

export default Group;