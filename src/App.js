import "./App.css";
import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Group from "./components/group";
import Home from "./components/home";
import Navbar from "./components/navbar/navbar.js";
import Dashboard from "./components/dashboard";
import Bulletin from "./components/discussion/Bulletin";
import DiscussionThread from "./components/discussion/DiscussionThread";

function App() {
  const bookClubRoutes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "group", element: <Group /> },
        { path: "group/discussion", element: <DiscussionThread /> },
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
