import "./App.css";
import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Group from "./components/group";
import Home from "./components/home";
import Navbar from "./components/navbar/navbar.js";
import Dashboard from "./components/dashboard";
import DiscussionThread from "./components/discussion/DiscussionThread";
import Sidebar from "./components/sidebar";

function App() {
  const bookClubRoutes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "group", element: <Group /> },
        {
          path: "group/discussions",
          element: <DiscussionThread />,
          children: [{ path: ":discussionId", element: <DiscussionThread /> }],
        },
      ],
    },
    { path: "/login" },
    { path: "/logout" },
  ]);

  return (
    <div className="Logs" class="container-fluid">
      <Navbar />
      {bookClubRoutes}
    </div>
  );
}

export default App;
