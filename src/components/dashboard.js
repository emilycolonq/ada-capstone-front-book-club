import React from "react";
import Books from "./books/books";
import Sidebar from "./sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import GoogleLoginComponent from "./logInOut/googlogcomponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

const Dashboard = () => {
  return (
    <div
      style={
        {
          // display: 'block',
          // justifyContent: 'Left',
          // height: '100vh'
        }
      }
    >
      {/* <Stack direction="horizontal" gap={3}>  */}
      <Sidebar />
      <Outlet />

      <Container>
        <Row className="justify-content-md-center">
          <Col md={{ span: 6, offset: 0 }} sm={6} xs={6}>
            <GoogleLoginComponent />
          </Col>
          <Col md={{ span: 4, offset: 5 }} sm={6} xs={6}>
            <Books />
          </Col>
        </Row>
      </Container>
      {/* </Stack> */}
    </div>
  );
};

export default Dashboard;
