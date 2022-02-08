import React from 'react';
import Books from "./books/books";
import Sidebar from './sidebar';
import Group from './group';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import GoogleLoginComponent from './logInOut/googlogcomponent';
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles.css'





const Dashboard = () => {
    return (
    <div
        style={{
            // display: 'block',
            // justifyContent: 'Left',
            // height: '100vh'
        }}>

        
        {/* <Stack direction="horizontal" gap={3}>  */}
        <Sidebar/>
        <Outlet />

        <Container>
            <Row className="justify-content-md-center">
                <Col className = "login" md={{ span: 6, offset: 3 }}><GoogleLoginComponent/></Col>
                <Col md={{ span: 4, offset: 4 }}><Books/></Col>
            </Row>
        </Container>
        {/* </Stack> */}

    </div>
    );
};

export default Dashboard;