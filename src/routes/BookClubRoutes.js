import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/navbar.js";
import Home from "../components/home";
import Dashboard from "../components/dashboard";
import Group from "../components/group";
import Bulletin from "../components/discussion/Bulletin";
import DiscussionThread from "../components/discussion/DiscussionThread";

const BookClubRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="group" element={<Group />} />
          <Route path="group/discussion" element={<DiscussionThread />} />
          {/* NOTE: path="group/discussion" needs to be changed to group/discussion/:id to link to discussion by discussion_id */}
        </Route>
        <Route path="/login" />
        <Route path="/logout" />
      </Routes>
    </Router>
  );
};

export default BookClubRoutes;
