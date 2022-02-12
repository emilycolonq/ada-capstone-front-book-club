import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.js";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import GroupPage from "./components/grouppage";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="Logs" class="container-fluid">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="group" element={<GroupPage />} />
          </Route>
          {/* <Route path="/login" />
          <Route path="/logout" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
