import React, {useState, useEffect} from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import './styles.css'
import axios from 'axios';
import Group from "./group";


const Sidebar = () => {
  // const [setGroup] = useState({title: '', group_id: 0});
  // const [groupList, setGroupList] = useState([]);
  // let url = process.env.BOOK_CLUB_BACKEND;

  // useEffect(() => {
  //     getGroupListTest();
  // }, []);

  // const checkGroup = (group) => {
  //   setGroup(group);
  // }
  
  // const getGroupListTest = () => {
  //     axios.get(url)
  //     .then((response) => {
  //         setGroupList(response.data);
  //     })
  // }

  //   const addGroupList = groupList.map((oneGroup, index) => {
  //     return (<p key={oneGroup.id}> 
  //       <Group id={oneGroup.id} name={oneGroup} current={checkGroup}/>
  //     </p>)
  //   })


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Dashboard</h2>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="groups" activeStyle>
                Group Name
                  {/* <fieldset>
                  <ol>{addGroupList}</ol>
                  </fieldset> */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
