import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Card from './Card';

class Group extends Component {
    formSubmit = (event) => {
        event.preventDefault()
        var data = new FormData(event.target)
        let formObject = Object.fromEntries(data.entries())
    }
    render() {
        return (
        <div>
            <form onSubmit={this.formSubmit}>
            <label>Name</label>
            <input name="name" placeholder="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <input type="submit" />
            </form>
        </div>
        )
    }
}

// const Group = (props) => {
//     const selectGroup = () => {
//         const newSelected = {
//             name: props.group.name,
//             // owner: props.board.owner,
//             group_id: props.id
//         }
//         props.current(newSelected);
//     } 
//     return (
//         <li className="group-item" onClick={selectGroup}> {props.group.name} </li>
//     )

// }

export default Group;