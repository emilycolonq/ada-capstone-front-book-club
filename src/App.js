import "./App.css";
import React, { useState, useEffect } from "react";
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
  const [userInfo, setUserInfo] = useState({});
  const [member, setMember] = useState({});
  console.log(userInfo);

  useEffect(() => {
    const axios = require("axios");
    if (!userInfo) {
      return;
    } else {
      axios
        .get(
          `https://ada-capstone-book-club.herokuapp.com/adabookclub/members/get_member_by_email/?email=${userInfo.emailId}`
        )
        .then((response) => {
          setMember(response.data);
        });
    }
  }, [setMember, userInfo]);
  return (
    <div className="Logs" class="container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="dashboard"
          element={<Dashboard setUserInfo={setUserInfo} userInfo={userInfo} />}
        >
          <Route path="groups/:groupId" element={<GroupPage />} />
          <Route
            path="groups/:groupId/discussions/:discussionId"
            element={<DiscussionThread member={member} />}
          />
        </Route>
      </Routes>
      {/* <Route path="/login" />
          <Route path="/logout" /> */}
    </div>
  );
}

export default App;
