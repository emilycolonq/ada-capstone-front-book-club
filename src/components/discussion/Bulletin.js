import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

// This will have links to each Board.

const Bulletin = () => {
  return (
    <div>
      <ul className="bulletinList">
        <li className="bulletinListItem">
          <Link to="board" activeStyle>
            Normal People Chapter 1
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Bulletin;
