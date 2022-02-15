import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import Group from "./group";

// const Sidebar = () => {
//   const [setGroup] = useState({group_name: '', group_id: 0});
//   const [groupList, setGroupList] = useState([]);
// //   let url = process.env.BOOK_CLUB_BACKEND;
// const Sidebar = () => {
// const [setGroup] = useState({title: '', group_id: 0});
// const [groupList, setGroupList] = useState([]);
// let url = process.env.BOOK_CLUB_BACKEND;

//   useEffect(() => {
//       getGroupListTest();
//   }, []);

//   const checkGroup = (group) => {
//     setGroup(group);
//   }

//   const getGroupListTest = () => {
//       axios.get("https://ada-capstone-book-club.herokuapp.com/adabookclub/groups/")
//       .then((response) => {
//           setGroupList(response.data);
//       })
//   }

//     const addGroupList = groupList.map((oneGroup, index) => {
//       return (<p key={oneGroup.id}>
//         <Group id={oneGroup.id} name={oneGroup} current={checkGroup}/>
//       </p>)
//     })

export default class Sidebar extends React.Component {
  state = {
    groups: [],
  };

  componentDidMount() {
    axios
      .get(`https://ada-capstone-book-club.herokuapp.com/adabookclub/groups/`)
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
              {/* <li className="sidebarListItem"> */}
              {this.state.groups.map((group) => (
                <li key={group.id}>
                  <Link to={`/groups/${group.id}`} activeStyle>
                    {group.group_name}
                  </Link>
                </li>
              ))}
              <div></div>
              {/* </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
