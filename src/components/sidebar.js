import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Dashboard</h2>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="group" activeStyle>
                Group Name
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
