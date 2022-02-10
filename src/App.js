import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Bulletin from "./components/discussion/Bulletin";
import BookClubRoutes from "./routes/BookClubRoutes";

function App() {
  // Bulletin

  return (
    <div className="Logs" class="container-fluid">
      <BookClubRoutes />
      <Bulletin />
    </div>
  );
}

export default App;
