import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";

export default class Sidebar extends React.Component {
  state = {
    groups: [],
  };

  componentDidMount() {
    axios
      .get("https://ada-capstone-book-club.herokuapp.com/adabookclub/groups/")
      .then((res) => {
        const groups = res.data;
        this.setState({ groups });
      });
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h2 className="sidebarTitle">Dashboard</h2>
            <ul className="sidebarList">
              {this.state.groups.map((group) => (
                <li key={group.id}>
                  <Link to={`groups/${group.id}`} activeStyle>
                    {group.group_name}
                  </Link>
                </li>
              ))}
              <div></div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
