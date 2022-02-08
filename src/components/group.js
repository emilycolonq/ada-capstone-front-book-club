import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import BookCard from './books/bookcard';
import PagesProgressBar from './pagesprogress';


const Group = (props) => {
    
    // const selectGroup = () => {
    //     const newSelected = {
    //         name: props.group.name,
    //         group_id: props.id
    //     }
    //     props.current(newSelected);
    // } 
    return (
        <div>
            <h3 className="page-progress">Progress Bar</h3>
                <PagesProgressBar bgcolor="yellow" progress='30'  height={30} />
                <PagesProgressBar bgcolor="orange" progress='60'  height={30} />
                {/* <PagesProgressBar bgcolor="#" progress='50'  height={30} /> */}
        </div>
        // <h1 className="group-item" onClick={selectGroup}> {props.group.name} </h1>
    )

}

export default Group;