import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import User from "../user";
const axios = require("axios");

const CLIENT_ID =
  "347596848722-a0ku7tc318qpc8l56k6mmp17gadq81r9.apps.googleusercontent.com";

class GoogleLoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userInfo: {
        name: "",
        emailId: "",
      },
    };
  }

  // Success Handler
  responseGoogleSuccess = (response) => {
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
    };
    this.setState({ userInfo, isLoggedIn: true });
    this.props.setUserInfo(userInfo);
  };

  // Error Handler
  responseGoogleError = (response) => {
    console.log(response);
  };

  // Logout Session and Update State
  logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: "",
    };
    this.setState({ userInfo, isLoggedIn: false });
  };

  onNewUser = (props) => {
    let url = process.env.BOOK_CLUB_BACKEND;
    const newUser = {
      username: props.username,
    };
    axios.post(url, newUser);
  };

  render() {
    return (
      <div className="row mt-5">
        <User
          username={this.state.userInfo.name}
          isLoggedIn={this.state.isLoggedIn}
        />
        <div className="col-md-12">
          {this.state.isLoggedIn ? (
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText={"Logout"}
              onLogoutSuccess={this.logout}
            ></GoogleLogout>
          ) : (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Sign In with Google"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleError}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
              onUserSubmit={this.onNewUser}
            />
          )}
        </div>
      </div>
    );
  }
}
export default GoogleLoginComponent;
