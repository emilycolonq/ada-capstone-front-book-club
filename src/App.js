import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.js";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Group from "./components/group";
import "bootstrap/dist/css/bootstrap.css";
import Bulletin from "./components/discussion/Bulletin";
import DiscussionThread from "./components/discussion/DiscussionThread";

function App() {
  //   DiscussionThread.js State and Event Handlers (messagesByDiscussionId: an object of arrays where the key is discussion_id)
  const [messagesByDiscussionId, setMessagesByDiscussionId] = useState({});

  return (
    <div className="Logs" class="container-fluid">
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
    </div>
  );
}

// function App() {
//   return (
//       <div className= 'App'>
//         <Navbar />
//       </div>
//   );
// }

export default App;
