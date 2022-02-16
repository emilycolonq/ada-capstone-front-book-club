import React from "react";
import Books from "./books";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import GoogleLoginComponent from "./googlogcomponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

const Dashboard = (props) => {
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
      <Sidebar />
      <Container>
        <Row className="justify-content-md-center">
          <Col md={{ span: 6, offset: 0 }} sm={6} xs={6}>
            <GoogleLoginComponent
              userInfo={props.userInfo}
              setUserInfo={props.setUserInfo}
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 5 }} sm={6} xs={6}>
            <Books />
          </Col>
        </Row>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
