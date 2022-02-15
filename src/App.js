import "./App.css";
import React from "react";
// import { useRoutes, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Group from "./components/group";
import Home from "./components/home";
import Navbar from "./components/navbar/navbar.js";
import Dashboard from "./components/dashboard";
import DiscussionThread from "./components/discussion/DiscussionThread";
// import Sidebar from "./components/sidebar";
import GroupPage from "./components/grouppage";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Logs" class="container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="groups" element={<GroupPage />} />
          <Route path="groups/discussions" element={<DiscussionThread />}>
            <Route path=":discussionId" element={<DiscussionThread />} />
          </Route>
        </Route>
      </Routes>
      {/* <Route path="/login" />
          <Route path="/logout" /> */}
    </div>
  );
}

export default App;
