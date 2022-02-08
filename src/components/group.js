import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import BookCard from './books/bookcard';
import PagesProgressBar from './pagesprogress';
import { Row, Col } from 'react-bootstrap';


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
            <Row className="justify-content-md-center">
                <Col md={{ span: 6, offset: 0 }} sm ={6} xs={6}>
                    <h3 className="page-progress">Progress Bar</h3>
                        <PagesProgressBar bgcolor="yellow" progress='30'  height={30} />
                        <PagesProgressBar bgcolor="orange" progress='60'  height={30} />
                </Col>
            </Row>
        </div>
        // <h1 className="group-item" onClick={selectGroup}> {props.group.name} </h1>
    )

}

export default Group;