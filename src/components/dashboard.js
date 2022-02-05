import React from "react";
import Books from "./books/books";
import Sidebar from "./sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Left",
        // alignItems: 'Center',
        height: "100vh",
      }}
    >
      <Sidebar />
      <Outlet />
      <Books />
    </div>
  );
};

export default Dashboard;
